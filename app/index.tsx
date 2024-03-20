import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Page() {
  const router  = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Transak Expo Demo</Text>
        <Button title="Get started" onPress={() => router.push('/transak')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    margin: 24
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
