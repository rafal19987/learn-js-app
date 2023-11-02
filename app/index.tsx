import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Learn JS</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.description}>
          Start learning JavaScript and prepper yourself for interview
        </Text>
        <Pressable
          style={styles.startBtn}
          onPress={() => router.push('/select')}
        >
          <Text style={styles.startBtnText}>Start</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 64,
    border: '1px solid red',
  },
  section: {
    position: 'relative',
    width: '90%',
    height: '40%',
    paddingHorizontal: 24,
    paddingVertical: 24,
    borderRadius: 40,
    backgroundColor: 'white',
  },
  headlineContainer: {
    border: '1px solid red',
    width: '100%',
    paddingVertical: 12,
  },
  headline: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 64,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    width: '100%',
    fontFamily: 'Open Sans',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  startBtn: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -60,
    width: 120,
    height: 120,
    borderRadius: 80,
    backgroundColor: '#FF5A00',
  },
  startBtnText: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
  },
});
