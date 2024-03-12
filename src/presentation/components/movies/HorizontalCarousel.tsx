import React, { useRef, useEffect } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePoster } from './MoviePoster';

interface Props {
    movies: Movie[]
    title?: string
    loadNextPages?: () => void
}

export const HorizontalCarousel = ({ movies, title, loadNextPages }: Props) => {

    const isLoading = useRef(false)

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200);
    }, [movies])


    const onScrool = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

        if (!isEndReached) return //si aun no llegamos al final
        isLoading.current = true
        //cargar las siguientes peliculas
        loadNextPages && loadNextPages()
    }
    return (
        <View style={{ height: title ? 260 : 220 }}>
            {
                title && (
                    <Text style={{ fontSize: 30, fontWeight: '300', marginLeft: 10, marginBottom: 10 }}>{title}</Text>
                )
            }

            <FlatList data={movies}
                renderItem={({ item }) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )}
                keyExtractor={(item, index) => `${item.id.toString()}${index}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                onScroll={onScrool}
            />
        </View>
    )
}
