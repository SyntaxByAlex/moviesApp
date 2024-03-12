import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[];
    height?: number
}

export const PosterCarousel = ({ movies, height = 440 }: Props) => {
    return (
        <View style={{ height }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {movies.map(movie => <MoviePoster key={movie.id} movie={movie} />)}
            </ScrollView>
        </View>
    )
}

