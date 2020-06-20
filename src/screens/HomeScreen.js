import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components demo" />
      <Button
        title="Got to list demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Got to image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Got to counter demo"
        onPress={() => navigation.navigate("Counter")}
      />
    </View>
  );
}; 

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
