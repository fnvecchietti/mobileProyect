import React from 'react'
import { View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from 'react-native-elements'

const OBJCT = [{
    product: 'Bendix',
    price: 100,
    description: 'Bendix para Motomel strato 150',
    stock: 1
}]

export const ProductList = (props, queryProduct) => {

    return (<ScrollView>
        {OBJCT ? Object.map((item, index)=>{
            return(<Card key={index}>
            <View>
                <Image resizeMode="cover"
                source={{ uri: item.image}}
                />

            </View></Card>)
        }) : ''}
    </ScrollView>)
}

