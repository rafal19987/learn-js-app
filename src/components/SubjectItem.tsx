import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { type TSubjects } from '../redux/features/subjectsSlice';

type TSubjectItem = {
  id: TSubjects['id'];
  title: TSubjects['title'];
  selected: boolean;
  onSelect: (id: TSubjects['id']) => void;
};

export const SubjectItem = ({
  id,
  title,
  selected,
  onSelect,
}: TSubjectItem) => {
  return (
    <TouchableOpacity
      style={[styles.item, selected ? styles.active : null]}
      onPress={() => onSelect(id)}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 75,
    backgroundColor: '#9B79FE',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginBottom: 24,
  },
  active: {
    backgroundColor: '#FF9051',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
