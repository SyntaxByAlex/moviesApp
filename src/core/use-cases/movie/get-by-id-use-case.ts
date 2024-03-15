import { HttpAdapter } from '../../../config/adapters/http/hppt.adapter';
import { DetailsMovieResponse } from '../../../infrastructure/interfaces/movie-db-responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { FullMovie } from '../../entities/movie.entity';


export const getMovieByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
    try {
        //fethcer
        const detailMovie = await fetcher.get<DetailsMovieResponse>(`/${movieId}`)
        const fullMovie = MovieMapper.fromMovieDBDetailsMovieToEntity(detailMovie)
        //mapper
        return fullMovie
        //return full movie
    } catch (error) {
        throw new Error(`Cannot get movie by id ${movieId}`)
    }

}