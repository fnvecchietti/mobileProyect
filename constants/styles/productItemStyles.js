import React from 'react'
import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    productItemContainer: {
        paddingTop: 40,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        width: '100%'

    },
    image: {
        width: '100%',
        height: 300
    },
    blockBottom: {
        flexDirection: "column",

    },
    textDefault: {
        color: 'black',
        padding: 5
    },
    productName: {
        textAlign: "center",
        color: 'black',
        fontSize: 30
    },
    buyButton: {
        alignSelf: 'center',
        marginTop: 30
    },
    subtitle: {
        padding: 5
    },
    price: {
        textAlign: 'right',
        fontSize: 20,
        color: 'green'
    }


})