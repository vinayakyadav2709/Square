import { StyleSheet, Text, View, Button } from 'react-native';

import { InchandSuttoMM , MMtoInchandSut } from '../UnitConverter/UnitConverters';



export default function HomeTitle(props) {

  return (
    
      <View style={styles.title}>
       <Text style={styles.titletext}>{props.title} </Text>
       {props.Ele}
       <Button title='Menu' ></Button>
       
      </View>
      
    
  );
}

const styles = StyleSheet.create({
  titletext:{
    color:'white',
  },
  title:{
    fontSize:20,
    backgroundColor:"#5484d1",
    padding:20,
  },
});