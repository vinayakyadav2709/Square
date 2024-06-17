import { TextInput, View, Text } from "react-native";
import SelectDropdown from "react-native-select-dropdown";


import { useSizeObj } from "../logic/manager";

const fractions = ["0","1/16","1/8","3/16","1/4","5/16","3/8","7/16","1/8","9/16","5/8","11/16","3/4","13/16","7/8","15/16"]
const Suts = ["0","0.5","1","1.5","2","2.5","3","3.5","4","4.5","5","5.5","6","6.5","7","7.5"]

const units = ['frac','sut','mm']

let Obj = {
    priLen:"",
    secLen:"",
    priBred:"",
    secBred:"",
    pcs:"",
    unit:0,
}

export default function SizeInputBar (props) {
    const [sizeObj,setUnit,setPcs,setPriLen,setSecLen,setPriBred,setSecBred] = useSizeObj((state) => [
        state.sizeObj,
        state.setUnit,
        state.setPcs,
        state.setPriLen,
        state.setSecLen,
        state.setPriBred,
        state.setSecBred,

    
    ])

  
    
    if(props.type == 0){
        return (
            <View>
               
               <View>
                <TextInput placeholder="Inchs" onChangeText={(d)=>{
                    setPriLen(d)
                }}></TextInput>

                <SelectDropdown
                defaultValue={0}
                data={fractions}
                onSelect={(selectedItem, index) => {
                    setSecLen(index)
                  }}
                ></SelectDropdown>

               </View>

               <Text>X</Text>
               
               <View>
                <TextInput placeholder="Inchs"onChangeText={(d)=>{
                    setPriBred(d)
                }}></TextInput>

                <SelectDropdown
                defaultValue={0}
                data={fractions}
                onSelect={(selectedItem, index) => {
                    setSecBred(index)

                  }}
                ></SelectDropdown>

               </View>
               
               <View>
                <TextInput placeholder="Pcs" onChangeText={(data)=>{
                    setPcs(data)
                      
                }}></TextInput>
               </View>
            </View>
           );
        
    }else if(props.type == 1){
        return (
            <View>
               <View>
                <TextInput placeholder="Inchs" onChangeText={(d)=>{
                    setPriLen(d)
                }}></TextInput>

                <SelectDropdown
                defaultValue={0}
                data={Suts}
                onSelect={(selectedItem, index) => {
                    setSecLen(index)
                  }}
                ></SelectDropdown>

               </View>

               <Text>X</Text>
               
               <View>
                <TextInput placeholder="Inchs" onChangeText={(d)=>{
                    setPriBred(d)
                }}></TextInput>

                <SelectDropdown
                defaultValue={0}
                data={Suts}
                onSelect={(selectedItem, index) => {
                    setSecBred(index)
                  }}
                ></SelectDropdown>

               </View>
               
               <View>
               <TextInput placeholder="Pcs" onChangeText={(data)=>{
                    setPcs(data)
                      
                }}></TextInput>
               </View>
            </View>
        )
    }else if(props.type == 2){
        return (
            <View>
               <View>
                <TextInput placeholder="MM"></TextInput>
                
               </View>

               <Text>X</Text>
               
               <View>
                <TextInput placeholder="MM"></TextInput>
               </View>
               
               <View>
                <TextInput placeholder="Pcs"></TextInput>
               </View>
            </View>
        );
    }
    
    
}