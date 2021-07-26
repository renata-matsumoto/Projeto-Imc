
import React from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
import Content from './src/componentes/Content';
import Footer from './src/componentes/Footer';
import Header from './src/componentes/Header';
import { styles } from './Style/style1';



export default function App() {
  return (

    <ScrollView>
      <View style={styles.appContainer}>
        <Header/>
        <Content/>
        <Footer/>
        
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}


