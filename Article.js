import React from "react";
import { StyleSheet, Text, Pressable, Image } from 'react-native'

export default function Article({data, updateState}) {
  const {title, multimedia} = data
  let url = '', altText = 'No image available'
  if(multimedia) { url = multimedia[1].url; altText = title }

  return (
    <Pressable 
      style={styles.article}
      onPress={() => {updateState(data)}}
    >
      <Image 
        style={styles.image}
        source={{ uri: url }}
        alt={altText}
      />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  article: {
    height: 250,
    paddingHorizontal: 10,
    justifyContent:"space-evenly",
    paddingVertical: 10,
    borderWidth: 2,
    borderStartColor: "transparent",
    borderEndColor:  "transparent",
  }, 
  text: {
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: "60%"
  }
})