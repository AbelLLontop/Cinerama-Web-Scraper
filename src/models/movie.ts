import mongoose from 'mongoose';
export interface IMovie{
	img: string,
	title: string,
	types: string[],
	director: string,
	duracion: string,
	fechaEstreno: string,
	reparto: string,
	sinopsis: string,
	horarios: string[],
	extra: {
		id: number,
		title: string,
		backdrop_path: string,
		poster_path: string,
		trailer: {
			key: string,
			id: string
		}
	}
}
const movieSchema = new mongoose.Schema<IMovie>({
	img: String,
	title: String,
	types: [String],
	director: String,
	duracion: String,
	fechaEstreno: String,
	reparto: String,
	sinopsis: String,
	horarios: [String],
	extra: {
		id: Number,
		title: String,
		backdrop_path: String,
		poster_path: String,
		trailer: {
			key: String,
			id: String
		}
	}
});

export const Movie = mongoose.models.Movie || mongoose.model<IMovie>('Movie', movieSchema);
