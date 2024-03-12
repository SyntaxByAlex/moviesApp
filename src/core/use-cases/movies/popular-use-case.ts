import { HttpAdapter } from "../../../config/adapters/http/hppt.adapter"
import { PopularMoviesResponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";

interface Options {
    page?: number,
    limit?: number
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options) => {
    try {
        console.log(options?.page ?? 1)
        const popular = await fetcher.get<PopularMoviesResponse>('/popular', {
            params: {
                page: options?.page ?? 1
            }
        });
        return popular.results.map(res => MovieMapper.fromMovieDBToEntity(res))
    } catch (error) {
        console.error(error)
        throw new Error("Error fetching movies -> NowPlaying");

    }
}