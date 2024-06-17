import { Text, View , StyleSheet, Button, TextInput, ScrollView} from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
//require("json-circular-stringify");

import HomeTitle from "../Uielements/HomeTitle";
import SizeCard from "../Containers/SizeCard";
import SizeInputBar from "../Uielements/SizeInputBar";
import UnitPicker from "../Uielements/UnitPicker";

import { useFishStore } from "../logic/Start";
import { useStateStore } from "../logic/manager";
import { useSizeObj } from "../logic/manager";

import { useState } from "react";
import { usesizePageUnit } from "../logic/myHooks";


const units = ['frac','sut','mm']

export default function SizePage(props) {
    const [Orders,setProduct,setSize] = useFishStore((state) => [
      state.Orders,
      state.setProduct,
      state.setSize,
      
    ])

    const [currentOrderID,currentProductID] = useStateStore((state) => [
      state.currentOrderID,
      state.currentProductID
    ])

    const [sizeObj,setUnit] = useSizeObj((state) => [state.sizeObj,state.setUnit])

    const [unitIndex,setunitIndex] = usesizePageUnit((state) => [state.unitIndex,state.setunitIndex])


  
//
    const[productname,prodcutnameSetter] = useState(() => {
      if (typeof Orders[currentOrderID].products == "undefined" || typeof Orders[currentOrderID].products[currentProductID] == "undefined") {
        return "null hai bhai"
      }else {
        return Orders[currentOrderID].products[currentProductID].productname
      }
    })
    const[rate,rateSetter] = useState(() => {
      if (typeof Orders[currentOrderID].products == "undefined" || typeof Orders[currentOrderID].products[currentProductID] == "undefined") {
        return "null hai bhai"
      }else {
        return Orders[currentOrderID].products[currentProductID].rate
      }
    })

    
    

    //
    


    const sizesaveHandler = () => {
      props.sizeModal(false)
      setProduct(currentOrderID,currentProductID,productname,rate)
    }

    const sizeButtonHandler = () => {
      console.log("size button handler =>")
      console.log(typeof(sizeObj))
      if (Orders[currentOrderID].products[currentProductID] && Orders[currentOrderID].products[currentProductID].sizes){
        console.log("Test:"+Orders[currentOrderID].products[currentProductID].sizes.length)
        setSize(currentOrderID,currentProductID,Orders[currentOrderID].products[currentProductID].sizes.length,sizeObj)
      }else {
        console.log("kaam karto ae")
        setSize(currentOrderID,currentProductID,0,sizeObj)
       }
     console.log("size button handler =>")
     
     
    }


    return (  
      <ScrollView>
      <View style={styles.containers}> 
        <HomeTitle id={2} title="Size Page" Ele={<UnitPicker />}></HomeTitle>
        <View>
          <TextInput placeholder="Product Name" value={productname} onChangeText={(data)=>prodcutnameSetter(data)}></TextInput>
          <TextInput placeholder="Rate" value={rate} onChangeText={(data)=>rateSetter(data)}></TextInput>
          <View>

          </View>


          <SelectDropdown 
            data={units}
            defaultValueByIndex={0}
            onSelect={(selectedItem, index) => {
              setunitIndex(index)
              setUnit(index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem
            }}
            // rowTextForSelection={(item, index) => {
            //   return item + "trial"
            // }}
          />

        <SizeInputBar type={unitIndex}  ></SizeInputBar>
        

        <View>
          {
            typeof Orders[currentOrderID].products[currentProductID] == "undefined"|| typeof Orders[currentOrderID].products[currentProductID].sizes == "undefined" ?
            <Text>No size</Text>:
            Orders[currentOrderID].products[currentProductID].sizes.map((data,i) => {
              return <SizeCard key={i} id={i} dataObj={data} ></SizeCard>
            })
          }
        </View>
          <Button title="Add Size" onPress={sizeButtonHandler}></Button>
          <Button title="Save" onPress={sizesaveHandler}></Button>
        


        </View>
        
        
        
        
      </View>
      </ScrollView>
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
  