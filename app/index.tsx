import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Text>HomeScreen</Text>

      <Link href="/login">
        <Text>Go to Login</Text>
      </Link>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
