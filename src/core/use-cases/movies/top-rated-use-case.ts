import { HttpAdapter } from "../../../config/adapters/http/hppt.adapter"
import { PopularMoviesResponse, TopRatedResponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
interface Options {
    page?: number,
    limit?: number
}

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter, options?: Options) => {
    try {
        const topRated = await fetcher.get<TopRatedResponse>('/top_rated', {
            params: {
                page: options?.page ?? 1
            }
        });
        return topRated.results.map(res => MovieMapper.fromMovieDBToEntity(res))
    } catch (error) {
        console.error(error)
        throw new Error("Error fetching movies -> NowPlaying");

    }
}