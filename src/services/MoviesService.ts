import { CineramaScraper } from '@/libs/CineramaScraper';
import { TMDBApi } from '../libs/TMDBApi';

export class MoviesService {
	
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
