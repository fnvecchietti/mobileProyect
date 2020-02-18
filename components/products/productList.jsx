import React, { useState } from "react";
import { View, Image } from "react-native";
import { Text } from "react-native-elements";
import { style } from "../../constants/styles/produtListStyles";
import { getProducts } from "../services/products";
import { withFirebaseHOC } from "../../configs/firebase";

console.ignoredYellowBox = ["Setting a timer"];

function ProductList(props) {
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  products == null ? getProducts(props, setProducts, setLoading) : "";
  console.log(products ? products[0].expiracion : '')
  return (
    <View style={style.container}>
      {products ? (
        products.map((item, index) => {
          return (
            <View key={index} style={style.content}>
              <View style={style.ImageAndProductContainer}>
                <Image
                  style={style.image}
                  resizeMode="cover"
                  source={{ uri: item.imagePromocion }}
                />
                <Text style={style.product}>{item.nombrePromocion}</Text>
              </View>
              <View>
                <Text style={style.shortDescription}>{item.descripcion}</Text>
                <Text style={style.price}>${item.importe}</Text>
                <Text style={style.stock}>Stock:</Text>
              </View>
            </View>
          );
        })
      ) : (
        <View></View>
      )}
    </View>
  );
}

export default withFirebaseHOC(ProductList);