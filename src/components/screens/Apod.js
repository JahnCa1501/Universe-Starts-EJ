import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, Image, ScrollView} from "react-native";
import {nasaApod }from '../../api';

const Apod = ({navigation}) => {

    const [apod, setApod] = useState({});

    const getApod = async () => {
      const response = await nasaApod();
  
      setApod(response);
    };
  
    useEffect(() => {
      getApod();
    }, []);

    return ( 
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>{apod.title}</Text>
        <Text style={styles.date}>Date: {apod.date}</Text>
        <Image style={styles.image} source={apod.url} />
        <Text style={styles.text}>{apod.explanation}</Text>
      </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#8368cf"
  },
  
  text: {
    color: "white",
    margin: 4,
  },

  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    margin: 5
  },

  image: {
    width: "center",
    height: 400,
  },

  date: {
    color: "white",
    margin: 5
  },
});

export default Apod;