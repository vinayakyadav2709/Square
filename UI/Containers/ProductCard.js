import { Text, View , StyleSheet, Button, Pressable} from "react-native";
import SizeCard from "./SizeCard";

import { useFishStore } from "../logic/Start";

export default function ProductCard(props) {
    
  const [setCurrentProdcutID] = useFishStore((state) => [state.setcurrentProductID])
  
    
    const pressableHandler = () => {
      props.modalVisibility(true)
      setCurrentProdcutID(props.id)
    }
    return (  
      <View style={styles.containers}> 
        <Pressable onPress={pressableHandler}>
          <Text>{"#"+props.id}</Text>
          <Text>{props.productname}</Text>
          <Text>{props.rate}</Text>
          
          

          <Text>{"Total Pcs:"+props.pcs}</Text>
          <Text>{"Total Pcs:"+props.amount}</Text>
        
          
        </Pressable>
        
        
        
        
      </View>
    );
}

const styles = StyleSheet.create({
    containers: {
     margin:10,   
     backgroundColor: '#b8cff5',
    },
  });