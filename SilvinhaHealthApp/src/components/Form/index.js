import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './style'
import ResultImc from './resultImc'

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [imc, setImc] = useState(null);
  const [messageImc, setMessaImc] = useState("Preencha Peso e a Altura");
  const [textButton, setTextButton] = useState("Calcular Imc");

  function imcCalculator() {
    return setImc((weight / (height* height)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      Keyboard.dismiss();
      setHeight(null);
      setWeight(null);
      setMessaImc("Seu IMC é:")
      setTextButton("Calcular Novamente");
      return;
    }

    setImc(null);
    setMessaImc("Preencha o peso e a Altura")
    setTextButton("Calcular IMC");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height ?? ""}
          placeholder='Ex. 1.70'
          keyboardType='numeric'
        />
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight ?? ""}
          placeholder='Ex. 80.345'
          keyboardType='numeric'
        />
        <TouchableOpacity 
        style={styles.button} 
        onPress={() => validationImc()}>
          <Text style={styles.textButton}>
           {textButton}
            </Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResult={messageImc} resultImc={imc}/>
    </View>
  )
}