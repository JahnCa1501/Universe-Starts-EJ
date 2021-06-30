import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, ScrollView, View, Image} from "react-native";
import { Card } from "react-native-elements"
import { roverPhotos } from '../../api';

const roverImages = ({navigation}) => {

    const [rover, setRover] = useState(null);

    const getRover = async () => {
      const response = await roverPhotos();
  
      setRover(response);
    };
  
    useEffect(() => {
      getRover();
    }, []);

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Images</Text>
            {rover && rover.photos.map((image) => {
              return (
              <View key={image.id}>
                <Image style={styles.imagewrap} source={image.img_src}/>
              </View>
              );
            })}
        </ScrollView>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: "#011a49",
    }, 

    imagewrap: {
        margin: 10,
        padding: 2,
        height: 200,
        width: "center",
    },

    header: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
      },
  });

export default roverImages;