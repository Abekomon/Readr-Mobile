import { StatusBar } from "expo-status-bar";
import React from "react"
import { Text, View, Image, SafeAreaView, StyleSheet, Pressable, DeviceEventEmitter, Linking } from "react-native"

export default function ArticleModal({ navigation, route }) {
  const {title, short_url, abstract, byline, multimedia} = route.params.data

  let url = '', altText = 'No image available'
  if(multimedia) { url = multimedia[1].url; altText = title }

  const backHandler = () => {
    DeviceEventEmitter.emit("backToHome", {})
    navigation.goBack()
  }

  const linkHandler = () => {
    Linking.canOpenURL(short_url).then(() => {
      return Linking.openURL(short_url);
    })
  }

  return (
    <>
      <SafeAreaView style={styles.backBar}>
        <Pressable style={styles.backBtn} onPress={backHandler}>
          <Text style={styles.backTxt}>{"<  Back"}</Text>
        </Pressable>
      </SafeAreaView>
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={{uri: url}}
          alt={altText}
        />
        <View style={styles.dataView}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.byline}>{byline}</Text>
          <Text style={styles.abstract}>{abstract}</Text>
        </View>
        <View style={styles.linkView}>
          <Text style={styles.linkText} onPress={linkHandler}>View article on NYT.com</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: "center",
  },
  backBar: {
    marginTop: 20,
    height: "7%",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "black"
  },
  backTxt: {
    color: "white",
    fontSize: 22,
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10
  },
  dataView: {
    width: "100%",
    textAlign: "left",
    marginTop: 20
  },
  title: {
    fontSize: 22,
  },
  byline: {
    fontSize: 18,
    marginTop: 10
  },
  abstract: {
    fontSize: 16,
    marginTop: 10
  },
  linkView: {
    flex: 1,
    justifyContent: 'center',
  },
  linkText: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
  }
})