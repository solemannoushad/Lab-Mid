import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
      alignItems: 'center'
    },
    productMain: {
        margin: 15,
        width: 140,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    productImage: {
        width: 120,
        height: 120,
        resizeMode: 'contain'
    },
    credentials: {
      alignItems: 'center',
      marginTop: 5
    },
    iconView: {
      alignItems: 'flex-end'
    },
    screen: {
      flex: 0.5,
      paddingTop: 60
    },
    btnView: {
      alignItems: 'center',
      marginTop: 5
    },
    btnTxt: {
      textTransform: 'uppercase',
      fontSize: 14
    },
    imgView: {
      alignItems: 'center'
    },
    price: {
      color: 'blue'
    },
    columnWrapper: {
      paddingTop: 10
    },
    mainView: {
      marginTop: 50
    }
  });

  export {styles};