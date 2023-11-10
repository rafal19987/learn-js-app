import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { selectSubject } from '../redux/features/selectedSubjectSlice';
import { SubjectItem } from './SubjectItem';
import { Link } from 'expo-router';
import { type TSubjects } from '@/redux/features/subjectsSlice';

export const SubjectList = () => {
  const dispatch = useAppDispatch();
  const subjects = useAppSelector((state) => state.subjects);
  const selectedSubject = useAppSelector((state) => state.selectedSubject);

  const handleSelectSubject = (id: TSubjects['id']) => {
    dispatch(selectSubject({ subjectId: id }));
  };

  useEffect(() => {
    console.log(selectedSubject.subjectId);
  }, [selectedSubject]);

  return (
    <>
      <ScrollView style={styles.list}>
        {subjects.map((subject) => (
          <SubjectItem
            key={subject.id}
            id={subject.id}
            title={subject.title}
            selected={selectedSubject.subjectId === subject.id}
            onSelect={handleSelectSubject}
          />
        ))}
      </ScrollView>
      {selectedSubject.subjectId ? (
        <Link
          style={styles.confirmBtn}
          href="/questions"
          onPress={() => console.log(selectedSubject)}
        >
          <Text style={styles.confirmBtnText}>GO!</Text>
        </Link>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  confirmBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    height: 75,
    border: '1px solid white',
    borderRadius: 12,
    backgroundColor: '#FF9051',
  },
  confirmBtnText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
});
