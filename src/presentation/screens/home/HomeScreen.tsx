import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PosterCarousel } from '../../components/movies/PosterCarousel'
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel'

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const { isLoading, nowPlaying, popular, topRated, upComing, popularNextPage, topRatedNextPage, upComingNextPage } = useMovies()

    if (isLoading) {
        return (<Text>Cargando.....</Text>)
    }
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

                <PosterCarousel movies={nowPlaying} />

                <HorizontalCarousel loadNextPages={popularNextPage} movies={popular} title='Populares' />

                <HorizontalCarousel loadNextPages={topRatedNextPage} movies={topRated} title='Mejor calificadas' />

                <HorizontalCarousel loadNextPages={upComingNextPage} movies={upComing} title='Proximamente' />

            </View>
        </ScrollView>
    )
}
