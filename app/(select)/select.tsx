import { StyleSheet, Text, View } from 'react-native';
import { SubjectList } from '../../src/components/SubjectList';

export default function SelectPage() {
  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Select subject</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionDescription}>Avaiable subjects</Text>
        <SubjectList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 64,
  },
  headlineContainer: {
    width: '100%',
    paddingVertical: 12,
  },
  headline: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  section: {
    position: 'relative',
    width: '100%',
    padding: 24,
  },
  sectionDescription: {
    marginBottom: 24,
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
