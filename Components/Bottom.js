import { View } from "react-native"
import ProductCard from "./ProductCard"
import { styles } from "../styles"


export default function Bottom({data}) {
  return (
    <View style={styles.screen}>
        <ProductCard data={data} top={true}/>
    </View>
  )
}
