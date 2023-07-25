import { CineramaScraper } from '@/libs/CineramaScraper';
import { TMDBApi } from '../libs/TMDBApi';
import { MovieRepository } from '@/repositories/movieRepository';

export class MoviesService {
	constructor(private moviesRepository = new MovieRepository()){}
	getMovies = async () => {
		const movies = await this.moviesRepository.getMovies();
		return movies;
	};
	getAndSaveAllMoviesByScraper = async () => {
		const cineramaScraper = new CineramaScraper();
		const moviesList = await cineramaScraper.getMovies();
		const moviesWithExtra = await this.fetchExtraMovieData(moviesList);
		return moviesWithExtra;
	};
	private fetchExtraMovieData = async (movieList:any[]) => {
		const tmdbapi = new TMDBApi();
		const asyncMapMovies = movieList.map(async (movie) => {
			const movieTMDB = await tmdbapi.searchMovie(movie.title);
			return {
				...movie,
				extra: movieTMDB,
			};
		});
		return Promise.all([...asyncMapMovies]);

	};
}
