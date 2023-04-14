import { Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";

export default function CustomBtn() {
  return (
    <TouchableOpacity>
        <Text style={styles.btnTxt}>Buy Now</Text>
    </TouchableOpacity>
  )
}
