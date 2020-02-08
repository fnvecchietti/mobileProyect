import React from "react";
import { View, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Card, Text, Icon, Button } from "react-native-elements";
import { style } from "../../constants/styles/productItemStyles";

const OBJCT = {
  product: "Bendix",
  imageUrl: "https://spatarorepuestos.com/img/280115426005-01-600x600.jpg",
  price: 3500,
  shortDescription:
    "Bendix de arranque para motomel strato 150 compatible con ibr 250 y zb 150 entre otros",
  stock: 1,
  productID: 1,
  longDescription:
    "'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'"
};

export const ProductItem = (props) => {
  return (
    <View style={style.productItemContainer}>
      {OBJCT ? (
        <View style={style.container}>
          <Image
            source={{ uri: OBJCT.imageUrl }}
            resizeMode="cover"
            style={style.image}
          />
          <Text style={style.price}>${OBJCT.price}</Text>
          <View style={style.blockBottom}>
            <Text style={style.productName}>{OBJCT.product}</Text>
            <Text style={style.subtitle}>Informacion del producto: </Text>
            <Text style={style.textDefault}>{OBJCT.longDescription}</Text>
            <Button title="COMPRAR" containerStyle={style.buyButton} />
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};
