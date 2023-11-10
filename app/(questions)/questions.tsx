import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../../src/redux/hooks';

export default function SelectPage() {
  const selectedSubject = useAppSelector((state) => state.selectedSubject);
  const subjects = useAppSelector((state) => state.subjects);
  const questions = useAppSelector((state) => state.questions);

  const currentSubject = subjects.find(
    (subject) => subject.id === selectedSubject.subjectId
  );

  return (
    <View style={styles.container}>
      <View style={styles.headlineContainer}>
        <Text style={styles.headline}>Selected Subject</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionDescription}>{currentSubject?.title}</Text>
        <Text>
          {
            questions.filter(
              (question) => question.subjectId === selectedSubject.subjectId
            )[2].question
          }
        </Text>
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
