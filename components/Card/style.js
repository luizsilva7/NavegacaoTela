import {StyleSheet} from 'react-native'

const estilo = StyleSheet.create({
  cardTarefa: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: 300,
    margin: 120
  },
  imagemCard: {
    width: 300,
    height: 300,
    borderRadius: 4,
    marginBottom: 8
  },
  tituloCard: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
    textAlign: 'center'
  },
  textoCard: {
    fontSize: 22,
    color: '#666',
    marginBottom: 4
  },
  button: {
    backgroundColor: '#ea4c89',
    padding: 8,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }

})

export default estilo;

