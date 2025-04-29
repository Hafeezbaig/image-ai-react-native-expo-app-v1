import { Text, View, SafeAreaView, StatusBar } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0A0A0A" }}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0A0A" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          👋 Welcome!
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#BBBBBB",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          Generate Image at one place.
        </Text>
      </View>
    </SafeAreaView>
  );
}
