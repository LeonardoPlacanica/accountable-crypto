import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import useDebounce from '../hooks/useDebounce';

type Props = {
  onChangeText: (text: string) => void;
  value: string;
};

const SearchBar = ({onChangeText, value}: Props) => {
  const [fieldValue, setFieldValue] = useState(value);
  const debouncedValue = useDebounce<string>(fieldValue, 500);

  useEffect(() => {
    onChangeText(debouncedValue);
  }, [debouncedValue, onChangeText]);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={text => setFieldValue(text)}
        placeholder="Search"
        value={fieldValue}
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    padding: 10,
    justifyContent: 'center',
    marginLeft: 20,
    height: 40,
    margin: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
  },
  textInput: {
    color: 'black',
  },
});

export default SearchBar;
