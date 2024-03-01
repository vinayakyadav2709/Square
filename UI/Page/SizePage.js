import { Text, View , StyleSheet, Button, TextInput} from "react-native";
import SelectDropdown from 'react-native-select-dropdown'

import HomeTitle from "../Uielements/HomeTitle";
import SizeCard from "../Containers/SizeCard";

const countries = ['mm','sut','inch']

export default function SizePage(props) {
    
    return (  
      <View style={styles.containers}> 
        <HomeTitle title="Size Page"></HomeTitle>
        <View>
          <TextInput placeholder="Product Name"></TextInput>
          <TextInput placeholder="Rate"></TextInput>
          <View>

          </View>
          <SelectDropdown 
          data={countries}
          defaultValueByIndex={0}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          // rowTextForSelection={(item, index) => {
          //   return item + "trial"
          // }}
        />
        <Text>Size</Text>
        <TextInput placeholder="Length"></TextInput>
        <Text>X</Text>
        <TextInput placeholder="Breadth"></TextInput>
        <TextInput placeholder="Pcs"></TextInput>

        <View>
          <SizeCard id={"1"} length={"99.99"} breadth={"99.99"} pcs={10} unit={"mm"}></SizeCard>
          <SizeCard id={"2"} length={"11.11"} breadth={"22.22"} pcs={20} unit={"inch"}></SizeCard>
        </View>
          <Button title="Add Size"></Button>
          <Button title="Save" onPress={()=>{props.sizeModal(false)}}></Button>
        


        </View>
        
        
        
        
      </View>
    );
}

const styles = StyleSheet.create({
    containers: {
     margin:10,   
     backgroundColor: '#b8cff5',

    },
    dropdown:{
      display:"none",
    }
  });
  