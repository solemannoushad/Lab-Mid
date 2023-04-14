import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <>
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'#000000'}/>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 99999
    },
  });
