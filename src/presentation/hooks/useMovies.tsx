import React, { useState, useEffect } from 'react'
import { Movie } from '../../core/entities/movie.entity'
import { NowPlayingReponse, PopularMoviesResponse } from '../../infrastructure/interfaces/movie-db-responses';
import * as UseCases from '../../core/use-cases'
import { movieDBFecher } from '../../config/adapters/movieDB.adpter';

let popularPageNumber = 1;

export const useMovies = () => {

    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [upComing, setUpComing] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [topRated, setTopRated] = useState<Movie[]>([])

    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        initialLoad()
    }, [])

    const initialLoad = async () => {
        const nowPlayingMoviesPromise = UseCases.moviesNowPlayingUseCase(movieDBFecher)
        const popularMoviesPromise = UseCases.moviesPopularUseCase(movieDBFecher)
        const topRatedMoviesPromise = UseCases.moviesTopRatedUseCase(movieDBFecher)
        const upComingMoviesPromise = UseCases.moviesUpComingUseCase(movieDBFecher)

        const [
            nowPlayingMovies,
            popularMovies,
            topRatedMovies,
            upComingMovies
        ] = await Promise.all([
            nowPlayingMoviesPromise,
            popularMoviesPromise,
            topRatedMoviesPromise,
            upComingMoviesPromise])

        setNowPlaying(nowPlayingMovies)
        setPopular(popularMovies)
        setTopRated(topRatedMovies)
        setUpComing(upComingMovies)

        setIsLoading(false)
    }

    return {
        isLoading,
        nowPlaying,
        upComing,
        popular,
        topRated,
        popularNextPage: async () => {
            popularPageNumber++
            const popularMovies = await UseCases.moviesPopularUseCase(movieDBFecher, { page: popularPageNumber })
            setPopular(prev => [...prev, ...popularMovies])

        }
    }


}
