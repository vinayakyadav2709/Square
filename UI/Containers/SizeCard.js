import { Text, View , StyleSheet, Button, Pressable} from "react-native";

export default function SizeCard(props) {
  
    
    return (  
      <View style={styles.containers}> 
        <Pressable onPress={()=>{console.log("size card:"+props.id)}}>
          <Text>{"#"+props.id}</Text>
          <Text>{props.length + "x" + props.breadth + props.unit}</Text>
          <Text>{props.pcs+"pcs"}</Text>
          
        </Pressable>
        
        
        
        
      </View>
    );
}

const styles = StyleSheet.create({
    containers: {
     margin:10,   
     backgroundColor: '#818894',
    },
  });