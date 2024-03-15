import { HttpAdapter } from "../../../config/adapters/http/hppt.adapter"
import { PopularMoviesResponse, UpComingResponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
interface Options {
    page?: number,
    limit?: number
}

export const moviesUpComingUseCase = async (fetcher: HttpAdapter, options?: Options) => {
    try {
        const upcoming = await fetcher.get<UpComingResponse>('/upcoming', {
            params: {
                page: options?.page ?? 1
            }
        });
        return upcoming.results.map(res => MovieMapper.fromMovieDBToEntity(res))
    } catch (error) {
        console.error(error)
        throw new Error("Error fetching movies -> NowPlaying");

    }
}