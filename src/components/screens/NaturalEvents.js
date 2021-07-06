import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, ScrollView} from "react-native";
import { event } from '../../api';
import { Card } from "react-native-elements"



const Naturalevent = ({navigation}) => {
    const [data, setdata] = useState(null);

    const getdata= async () => {
      const response = await event();
  
      setdata(response);
    };
  
    useEffect(() => {
      getdata();
    }, []);

    return(
      <ScrollView style={styles.container}>
            <Text style ={styles.header}>EONET Events</Text>
            <Text style ={styles.text}>Natural Events from EONET</Text>
          {data && data.events.map((eonet)=> {
            return (
              <Card containerStyle = {styles.card} key ={eonet.id}>
                <Text style ={styles.Cardtitle}>{eonet.title}</Text>
              <Text>EVENT ID: {eonet.id}</Text>
              </Card>
            )
          })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#3bc0f5",
  },

  header: {
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center",
    },

  Cardtitle: {
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center",

  },

  card: {
    backgroundColor: "#d8c293",
  },
  
   text: {
     fontSize: 20,
     textAlign: "center",
   }
});


export default Naturalevent;
