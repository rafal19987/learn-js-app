import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.decorator1} />
      <View style={styles.decorator2} />
      <Text style={styles.title}>Learn JS</Text>
      <View style={styles.questionsMarkContainer}>
        <Image
          source={require('./src/assets/guestion-mark-small-icon-1.svg')}
          style={{
            width: 76,
            height: 130,
            transform: [{ rotate: '-30deg' }, { translateX: 20 }],
          }}
        />
        <Image
          source={require('./src/assets/question-mark-big-icon.svg')}
          style={{ width: 125, height: 220 }}
        />
        <Image
          source={require('./src/assets/question-mark-small-icon-2.svg')}
          style={{
            width: 76,
            height: 130,
            transform: [{ rotate: '30deg' }, { translateX: -20 }],
          }}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.description}>
          Start learning and prepper yourself for interview
        </Text>
        <Pressable style={styles.button} onPress={() => console.log('click')}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      </View>
      <Text style={styles.version}>version 0.1.0</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#9B79FE',
    alignItems: 'center',
    paddingHorizontal: 24,
    overflow: 'hidden',
  },
  decorator1: {
    position: 'absolute',
    top: -300,
    left: -15,
    width: 538,
    height: 538,
    border: '1px solid #FF9051',
    borderRadius: 999,
    backgroundColor: 'transparent',
  },
  decorator2: {
    position: 'absolute',
    bottom: -80,
    left: -245,
    width: 538,
    height: 538,
    border: '1px solid #FF9051',
    borderRadius: 999,
    backgroundColor: 'transparent',
  },
  title: {
    marginTop: 54,
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 64,
    fontWeight: '400',
    lineHeight: 95,
  },
  questionsMarkContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  container2: {
    marginTop: 30,
    position: 'relative',
    width: '100%',
    height: 240,
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 24,
  },
  description: {
    color: '#280A82',
    fontFamily: 'Poppins',
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 36,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: -50,
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#FF9051',
    borderRadius: 999,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  version: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    color: '#BABABA',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 2,
    lineHeight: 16,
  },
});
