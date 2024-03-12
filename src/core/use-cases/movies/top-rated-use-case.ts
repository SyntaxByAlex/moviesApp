import { HttpAdapter } from "../../../config/adapters/http/hppt.adapter"
import { PopularMoviesResponse, TopRatedResponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter) => {
    try {
        const topRated = await fetcher.get<TopRatedResponse>('/top_rated');
        return topRated.results.map(res => MovieMapper.fromMovieDBToEntity(res))
    } catch (error) {
        console.error(error)
        throw new Error("Error fetching movies -> NowPlaying");

    }
}