
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import useGet from './Hooks/useGet';
import Loading from './Components/Loading';
import ProductCard from './Components/ProductCard';
import { styles } from './styles';
import Top from './Components/Top';
import Bottom from './Components/Bottom';

export default function App() {

  const [products, setProducts] = useState([]);
  const {data , loading} = useGet('https://fakestoreapi.com/products');

  useEffect(() => {
    setProducts(data);
  } , [data])

  
  return (
    <>    
      {loading && <Loading/>}
      <View style={styles.container}>
          <Top data={products}/>
          <Bottom data={products}/>
      </View>
    </>
  );
}

