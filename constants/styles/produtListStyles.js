import React from 'react'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center'
    },
    ImageAndProductContainer: {alignItems: 'center'},
    image: {width: 150,
    height: 150},
    product:{fontWeight: 'bold', lineHeight: 30},
    shortDescription: {color: 'black', lineHeight: 20},
    price: {color: 'green',lineHeight: 30, fontSize: 20, textAlign: 'right'},
    stock: {},
    buttonContainer: {
        padding: 10
    }
})