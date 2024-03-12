import { HttpAdapter } from "../../../config/adapters/http/hppt.adapter";
import { NowPlayingReponse } from "../../../infrastructure/interfaces/movie-db-responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingReponse>('/now_playing');
        return nowPlaying.results.map(res => MovieMapper.fromMovieDBToEntity(res))
    } catch (error) {
        console.error(error)
        throw new Error("Error fetching movies -> NowPlaying");

    }
}