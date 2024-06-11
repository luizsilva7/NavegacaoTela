import { Text, View, Image, TouchableOpacity } from 'react-native';
import estilo from './style';
import { useNavigation } from '@react-navigation/native';

export default function Card({  titulo, imagem, descricao }) {
  const navigator = useNavigation();

  return (
    <TouchableOpacity style={estilo.cardTarefa} onPress={() => navigator.navigate('Details')}>
      <Image style={estilo.imagemCard} source={{ uri: imagem }} />
      <View style={{ marginLeft: 15, width: 150 }}>
        <Text style={estilo.tituloCard}>{titulo}</Text>
        <Text style={estilo.textoCard}>{descricao}</Text>
      </View>
      <Text style={{ fontSize: 25 }}>{}</Text>
      <TouchableOpacity style={estilo.button} onPress={() => console.log('Botão clicado!')}>
        <Text style={estilo.buttonText}>Ver detalhes</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}