import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CancelLogIn() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => { navigation.reset({ index: 0, routes: [{ name: 'MemoList' }] }); }}
      style={styles.container}
    >
      <Text style={styles.label}>キャンセル</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
