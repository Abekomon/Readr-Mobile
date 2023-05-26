import React, {useState, useEffect} from "react";
import fetchArticles from "./apiCalls";
import Header from "./Header";
import Article from './Article';
import { StyleSheet, Text, ScrollView, RefreshControl, SafeAreaView, DeviceEventEmitter, ActivityIndicator } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [refresh, setRefresh] = useState(false)
  const [allArticles, setAllArticles] = useState([])
  const [curArticle, setCurArticle] = useState({})

  const handleNav = () => {
    navigation.navigate("Article", { data: curArticle })
  }

  const updateState = (data) => {
    setCurArticle(data)
  }

  const fetchData = (filter) => {
    setRefresh(true)
    fetchArticles(filter).then(data => {
      setAllArticles(data.results.filter(art => art.title))
      setRefresh(false)
    }) 
  }
  
  useEffect(() => {
    fetchData();
    DeviceEventEmitter.addListener("backToHome", () => { setCurArticle({}) });
  }, [])

  useEffect(() => {
    if(curArticle.title) {
      handleNav()
    }
  }, [curArticle])

  // useEffect(() => {
  //   return () => {
  //       DeviceEventEmitter.removeAllListeners("backToHome")
  //     };
  //   }, []);

  const articles = allArticles.map((art, i) => <Article key={i} data={art} updateState={updateState} />)
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        style={styles.articleList}
        refreshControl= {
          <RefreshControl refreshing={refresh} onRefresh={fetchData} />
        }
      >
        {allArticles.length ? articles : <ActivityIndicator style={styles.loader} size="large" />}
      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    marginTop: 100,
  }
});