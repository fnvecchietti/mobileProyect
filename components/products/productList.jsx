import React from "react";
import { View, Image, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Card, Text, Icon } from "react-native-elements";
import {style} from '../../constants/styles/produtListStyles'


const OBJCT = [
  {
    product: "Bendix",
    imageUrl: 'https://spatarorepuestos.com/img/280115426005-01-600x600.jpg',
    price: 3500,
    shortDescription: "Bendix de arranque para motomel strato 150 compatible con ibr 250 y zb 150 entre otros",
    stock: 1,
    productID: 1
  },  {
    product: "Bendix",
    imageUrl: 'https://spatarorepuestos.com/img/280115426005-01-600x600.jpg',
    price: 3500,
    shortDescription: "Bendix de arranque para motomel strato 150 compatible con ibr 250 y zb 150 entre otros",
    stock: 1,
    productID: 1
  },  {
    product: "Bendix",
    imageUrl: 'https://spatarorepuestos.com/img/280115426005-01-600x600.jpg',
    price: 3500,
    shortDescription: "Bendix de arranque para motomel strato 150 compatible con ibr 250 y zb 150 entre otros",
    stock: 1,
    productID: 1
  },  {
    product: "Bendix",
    imageUrl: 'https://spatarorepuestos.com/img/280115426005-01-600x600.jpg',
    price: 3500,
    shortDescription: "Bendix de arranque para motomel strato 150 compatible con ibr 250 y zb 150 entre otros",
    stock: 1,
    productID: 1
  },  {
    product: "Bendix",
    imageUrl: 'https://spatarorepuestos.com/img/280115426005-01-600x600.jpg',
    price: 3500,
    shortDescription: "Bendix de arranque para motomel strato 150 compatible con ibr 250 y zb 150 entre otros",
    stock: 1,
    productID: 1
  },
];

export const ProductList = ({props}) => {
  return (
    <ScrollView>
      {OBJCT ? (
        OBJCT.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={()=> props.navigate('Product')}>
            <Card containerStyle={style.container} >
              <View style={style.ImageAndProductContainer}>
                <Image style={style.image} resizeMode="cover" source={{ uri: item.imageUrl }} />
                <Text style={style.product}>{item.product}</Text>
              </View>
              <View>
                <Text style={style.shortDescription}>{item.shortDescription}</Text>
                <Text style={style.price}>${item.price}</Text>
                <Text style={style.stock}>Stock: {item.stock}</Text>
              </View>
            </Card>
            </TouchableOpacity>
          );
        })
      ) : (
        <View></View>
      )}
    </ScrollView>
  );
};

