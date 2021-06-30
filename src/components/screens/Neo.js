
import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-elements"
import { neoNasa } from '../../api';

let today = new Date();
let yyyy = today.getFullYear();
let mm = '0' + (today.getMonth() + 1);
let dd = today.getDate();

today = `${yyyy}-${mm}-${dd}`;

const neoN = ({navigation}) => {

  console.log(today);
    const [neo, setNeo] = useState({});

    const getNeo= async () => {
      const response = await neoNasa();
  
      setNeo(response);
    };
  
    useEffect(() => {
      getNeo();
    }, []);

    return(
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Today near Objects: {neo.element_count}</Text>
          {neo.element_count &&
            neo.near_earth_objects['2021-06-30'].map((asteroid) => {
            return (
            <Card key = {asteroid.id}> 
            <Text style={styles.textheader}>{asteroid.name}</Text>
            <Text>Asteroid ID: {asteroid.id} </Text>
            <Text>Miss distance: {asteroid.close_approach_data[0].miss_distance.kilometers} Km from Earth</Text>
            <Text>Asteroid's Size: {asteroid.estimated_diameter.meters.estimated_diameter_max} meters</Text>
            <Text>Speed: {asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour} Kmh</Text>
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
      backgroundColor: "#d8c293",
    },
  
    header: {
      color: "black",
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "center",
    },

    textheader: {
      fontWeight: "bold",
      fontSize: 15,
      textAlign: "center",
    }
  });

export default neoN;