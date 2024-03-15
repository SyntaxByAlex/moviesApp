import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { getMovieByIdUseCase } from '../../core/use-cases'
import { movieDBFecher } from '../../config/adapters/movieDB.adpter'
import { FullMovie } from '../../core/entities/movie.entity'


export const useMovie = (movieId: number) => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [movie, setMovie] = useState<FullMovie>()

    useEffect(() => {
        loadMovie()
    }, [movieId])

    const loadMovie = async () => {
        setIsLoading(true)
        const fullMovie = await getMovieByIdUseCase(movieDBFecher, movieId)
        setMovie(fullMovie)
        setIsLoading(false)
        console.log(fullMovie)


    }

    return {
        isLoading,
        movie
    }
}
