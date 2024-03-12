import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/entities/movie.entity'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../navigation/Navigation'

interface Props {
    movie: Movie
    height?: number
    width?: number
}

export const MoviePoster = ({ movie, width = 300, height = 420 }: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>()
    return (
        <Pressable
            style={({ pressed }) => ({
                width,
                height,
                marginHorizontal: 5,
                paddingHorizontal: 5,
                paddingBottom: 20,
                opacity: pressed ? 0.9 : 1
            })}
            onPress={() => navigation.navigate('Details', { movieId: movie.id })}>
            <View style={style.imageContainer}>
                <Image style={style.image} source={{ uri: movie.poster }} />
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9
    }

})