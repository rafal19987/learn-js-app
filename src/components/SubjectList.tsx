import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppSelector } from '../redux/hooks';
import { SubjectItem } from './SubjectItem';
import { Link } from 'expo-router';

export const SubjectList = () => {
  const subjects = useAppSelector((state) => state.subjects);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);

  const handleSelectSubject = (id: number) => {
    setSelectedSubject(selectedSubject === id ? null : id);
  };

  return (
    <>
      <View style={styles.list}>
        {subjects.map((subject) => (
          <SubjectItem
            key={subject.id}
            id={subject.id}
            title={subject.title}
            selected={selectedSubject === subject.id}
            onSelect={handleSelectSubject}
          />
        ))}
      </View>
      <Link
        style={styles.confirmBtn}
        href="/questions"
        onPress={() => console.log(selectedSubject)}
      >
        <Text style={styles.confirmBtnText}>GO!</Text>
      </Link>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    border: '1px solid green',
  },
  confirmBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    height: 75,
    border: '1px solid red',
  },
  confirmBtnText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});
