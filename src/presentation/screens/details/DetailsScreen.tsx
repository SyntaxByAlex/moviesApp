import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParams } from '../../navigation/Navigation'
import { useMovie } from '../../hooks/useMovie'

interface Pops extends StackScreenProps<RootStackParams, "Details"> { }

export const DetailsScreen = ({ route }: Pops) => {

    const { movieId } = route.params
    const { } = useMovie(movieId)

    return (
        <View>
            <Text>DetailsScreen</Text>
        </View>
    )
}
