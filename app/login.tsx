import { usePreventRemove } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();
  const hasUnsavedChanges = true;

  usePreventRemove(hasUnsavedChanges, ({ data }) => {
    Alert.alert("Cambios no guardados", "¿Descartar y salir?", [
      { text: "No", style: "cancel" },
      {
        text: "Sí",
        style: "destructive",
        onPress: () => navigation.dispatch(data.action),
      },
    ]);
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
