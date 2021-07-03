import * as React from 'react';
import { Button, Card } from "react-native-elements";
import { ScrollView, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
    return ( 
      <ScrollView style={styles.container}>
      <Card>
        <Card.Image source={require('../imagenes/Galaxia.png')}>
        <Button 
        buttonStyle={{borderRadius:0 , marginLeft: 0, marginRight: 0}}
        title="Astronomic Picture of the Day"
        onPress = {() => navigation.navigate('APOD')}/>
        </Card.Image>
      </Card>

      <Card>
        <Card.Image source={require('../imagenes/Neo.jpg')}>
        <Button 
        buttonStyle={{borderRadius:0 , marginLeft: 0, marginRight: 0}}
        title="Near Earth Object"
        onPress = {() => navigation.navigate('NEO')}/>
        </Card.Image>
      </Card>

      <Card>
        <Card.Image source={require('../imagenes/MarsRover.webp')}>
        <Button 
        buttonStyle={{borderRadius:0 , marginLeft: 0, marginRight: 0}}
        title="Mars Rover Photos"
        onPress = {() => navigation.navigate('MRP')}/>
        </Card.Image>
      </Card>

      <Card>
        <Card.Image source={require('../imagenes/nasaimag.jpg')}>
        <Button 
        buttonStyle={{borderRadius:0 , marginLeft: 0, marginRight: 0}}
        title="Natural Events"
        onPress = {() => navigation.navigate('NE')}/>
        </Card.Image>
      </Card>


      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#227cb2"
  },
});

export default Home;