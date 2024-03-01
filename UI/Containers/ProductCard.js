import { Text, View , StyleSheet, Button, Pressable} from "react-native";
import SizeCard from "./SizeCard";

export default function ProductCard(props) {
    
    return (  
      <View style={styles.containers}> 
        <Pressable onPress={()=>{props.modalVisibility(true)}}>
          <Text>{"#"+props.id}</Text>
          <Text>{props.productname}</Text>
          <Text>{props.rate}</Text>
          
          <SizeCard id={"1"} length={"99.99"} breadth={"99.99"} pcs={10} unit={"mm"}></SizeCard>
          <SizeCard id={"2"} length={"11.11"} breadth={"22.22"} pcs={20} unit={"inch"}></SizeCard>

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