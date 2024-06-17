import { Text, View , StyleSheet, Button, Pressable} from "react-native";

import { useStateStore } from "../logic/manager";

export default function OrderCard(props) {
  const [setcurrentOrderID] = useStateStore((state) => [
    state.setcurrentOrderID
  ])

    const pressableHandler = () => {
      props.modalVisibility(true)
      setcurrentOrderID(props.id)
      console.log(props.id)

    }
    return (  
      <View style={styles.containers}> 
        <Pressable onPress={pressableHandler}>
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
  
