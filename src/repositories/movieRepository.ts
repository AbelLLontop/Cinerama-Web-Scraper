import connectMongoDB from "@/libs/mongodb";
import { IMovie, Movie } from "@/models/movie";

export class MovieRepository {
  async getMovies() {
    await connectMongoDB();

    const movies = await Movie.find();
    return movies;
  }
  async cleanMovies() {
    await connectMongoDB();

    await Movie.deleteMany();
  }
  async saveMovies(movies:IMovie[]) {
    await connectMongoDB();

    const moviesToSave= movies.map((movie) => new Movie(movie));

    await Movie.insertMany(moviesToSave);
  }
}
