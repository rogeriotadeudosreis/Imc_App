import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  // hooks
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [result, setResult] = useState("");
  let classificacao = "";

  // função para calcular o imc

  function calcularImc() {
    const imc = peso / (altura * altura);
    if (imc < 18.5) {
      classificacao = "Abaixo do peso, cuidado !";
    } else if (imc >= 18.5 && imc < 26) {
      classificacao = "Peso normal, parabéns !";
    } else if (imc > 25 && imc < 31) {
      classificacao = "Sobrepeso, cuidado !";
    } else if (imc > 30 && imc < 40.0) {
      classificacao = "Obeso, procure um médico !";
    } else if (imc > 39.9) {
      classificacao = "Obeso Mórbido, procure um médico urgente !";
    }
    setResult(imc + " => " + classificacao);
    cleanField();
  }

  function cleanField () {
    this.peso = "";
    this.altura = "";
  }

  return (
    // container principal
    <View style={styles.container}>
      {/* componente header */}
      <View style={styles.header}>
        <Image
          source={require("./assets/images/imc.png")}
          style={styles.imcImagem}
        />
      </View>
      {/* componente body */}
      <View style={styles.containerBody}>
        <View style={styles.containerTexto}>
          <Text style={styles.textoBody}>Calcule e descubra seu IMC !</Text>
        </View>
        {/* imput do peso */}
        <TextInput
          placeholderTextColor="green"
          placeholder="Informe seu peso"
          style={styles.inputPeso}
          keyboardType=""
          onChangeText={(numero) => setPeso(numero)}
        ></TextInput>
        {/* input da altura */}
        <TextInput
          placeholderTextColor="green"
          placeholder="Informe sua altura"
          style={styles.inputAltura}
          keyboardType="numeric"
          onChangeText={(numero) => setAltura(numero)}
        ></TextInput>
        {/*botão calcular  */}
        <View style={styles.botao}>
          <TouchableOpacity onPress={(() => calcularImc())}>
            <Image
              source={require("./assets/images/icone-ticado.jpg")}
              style={styles.iconeTicado}
            />
          </TouchableOpacity>
        </View>
        {/* saída do resultado */}
        <View style={styles.containerResult}>
          <Text style={styles.result}>{result}</Text>
        </View>
      </View>
      {/* componente footer */}
      <View style={styles.footer}>
        <Text style={styles.textoFooter}>
          Desenvolvimento de Sistema para Mobile com React-Native
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  header: {
    flex: 5,
    backgroundColor: "#ccc",
    marginTop: 20,
  },
  imcImagem: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  containerBody: {
    flex: 7,
    backgroundColor: "#ff8824",
    alignItems: "center",
    marginTop: 10,
  },
  footer: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCC",
  },
  textoFooter: {
    color: "#343434",
    fontWeight: "bold",
  },
  containerTexto: {
    backgroundColor: "#ff8824",
    marginTop: 10,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    borderColor: "blue",
    borderRadius: 5,
  },
  textoBody: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  inputPeso: {
    fontWeight: "bold",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    width: 250,
    fontSize: 16,
    textAlign: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 5,
  },
  inputAltura: {
    fontWeight: "bold",
    marginTop: 10,
    backgroundColor: "#FFFFFF",
    width: 250,
    fontSize: 16,
    textAlign: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    borderColor: "green",
    borderWidth: 1,
  },
  botao: {
    borderWidth: 1,
    borderColor: "green",
    marginTop: 25,
    width: 150,
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  iconeTicado: {
    width: 60,
    height: 50,
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#009544",
    textAlign:'center',
  },
  containerResult: {
    marginTop: 25,
    width: 350,
    height: 60,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "green",
  },
});
