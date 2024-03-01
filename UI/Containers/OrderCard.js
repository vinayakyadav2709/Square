import { Text, View , StyleSheet, Button, Pressable} from "react-native";

export default function OrderCard(props) {
    
    return (  
      <View style={styles.containers}> 
        <Pressable onPress={()=>{props.modalVisibility(true)}}>
          <Text>{props.id}</Text>
          <Text>{props.name}</Text>
          <Text>{props.date}</Text>
          <Button title="Menu"></Button>
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
  
