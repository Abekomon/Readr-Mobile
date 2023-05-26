import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { View, StyleSheet, Text} from "react-native"

export default function Header() {
  
  return (
    <View style={styles.headerContainer}>
      <StatusBar />
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Readr</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: "7%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  logo: {
    fontSize: 25,
    color: "white"
  }
})