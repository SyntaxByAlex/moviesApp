import { FullMovie, Movie } from "../../core/entities/movie.entity";
import type { DetailsMovieResponse, Result } from "../interfaces/movie-db-responses";

export class MovieMapper {
    static fromMovieDBToEntity(result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500/${result.backdrop_path}`,

        }
    }

    static fromMovieDBDetailsMovieToEntity(result: DetailsMovieResponse): FullMovie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500/${result.backdrop_path}`,
            budget: result.budget,
            duration: result.runtime,
            genres: result.genres.map(genre => genre.name),
            original_title: result.original_title,
            production_companies: result.production_companies.map(company => company.name)

        }
    }



}