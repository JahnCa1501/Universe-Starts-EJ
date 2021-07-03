import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, ScrollView, Image} from "react-native";
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
              <Card containerStyle = {styles.CardFile} key={image.id} >
                <Text style={styles.text} >Day Taken: {image.earth_date}</Text>
                <Card.Divider/>
                <Image style={styles.imagewrap} source={image.img_src}/>
              </Card>

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
        height: 250,
        width: "center",
    },

    header: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
      },

    CardFile: {
        backgroundColor: "#d8c293",
    },

     text: {
       fontSize: 20,
     }
  });

export default roverImages;