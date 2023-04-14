import { Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native";
import { styles } from "../styles";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomBtn from "./CustomBtn";

export default function ProductCard({data ,top}) {
    const num = 2;
  return (
    <FlatList
        data={data}
        numColumns={num}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => 
            <TouchableOpacity style={[styles.productMain , item.id===2 && top === true && styles.mainView]}>
                <View>
                    <View style={styles.iconView }>
                        <Icon name={"heart-o"} size={17}/>
                    </View>
                    <View style={styles.imgView}>
                        <Image style={styles.productImage} source={{uri: item.image}}/>
                    </View>
                    <View style={styles.credentials}>
                        <Text>{item.title.length > 10? item.title.slice(0,10) + '...' : item.title}</Text>
                        <Text style={styles.price}>{`$ ${item.price}`}</Text>
                    </View>
                    <View style={styles.btnView}>
                        <CustomBtn/>
                    </View>
                </View>
            </TouchableOpacity>
        }
        keyExtractor={item => item.id}
        />
    
  )
}
