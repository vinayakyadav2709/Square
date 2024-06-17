import { Text, View , StyleSheet, Button, Pressable} from "react-native";

import { MMtoInchandSut , InchandSuttoMM } from "../UnitConverter/UnitConverters";

import { useMainSizePageUnit } from "../logic/SizepageUnit";


const units = ['frac','sut','mm']
const fractions = ["0","1/16","1/8","3/16","1/4","5/16","3/8","7/16","1/8","9/16","5/8","11/16","3/4","13/16","7/8","15/16"]
const Suts = ["0","0.5","1","1.5","2","2.5","3","3.5","4","4.5","5","5.5","6","6.5","7","7.5"]

//inch to mm  // mm to inch 
//inch to sut  // sut to inch 
//mm to sut // sut to mm 

function Converter (mainUnit,Obj) {
  // console.log("Converter func Obj =>")
  // console.log(Obj)
  // console.log("Converter mainunit =>")
  // console.log(mainUnit)
  tempObj = Obj
  
  if (Obj.unit == 0 && mainUnit == 0){
    tempObj.unit = units[0]
    tempObj.secLen = fractions[Obj.secLen]
    tempObj.secBred = fractions[Obj.secBred]
    return tempObj
  }else if (Obj.unit == 1 && mainUnit == 1) {
    tempObj.unit = units[1]
    tempObj.secLen = Suts[Obj.secLen]
    tempObj.secBred = Suts[Obj.secBred]
  }else if (Obj.unit == 0 && mainUnit == 1) {
    tempObj.unit = units[1]
    tempObj.secLen = Suts[Obj.secLen]
    tempObj.secBred = Suts[Obj.secBred]
  }else if (Obj.unit == 1 && mainUnit == 0) {
    tempObj.unit = units[0]
    tempObj.secLen = fractions[Obj.secLen]
    tempObj.secBred = fractions[Obj.secBred]
  }
  
  return tempObj
}



export default function SizeCard(props) {
  const sizePageUnit = useMainSizePageUnit((state) => state.sizePageUnit)

  let Obj = Converter(sizePageUnit,props.dataObj)
  // console.log(Obj)
  
    
    return (  
      <View style={styles.containers}> 
        <Pressable onPress={()=>{console.log(Obj)}} style={styles.containers}>
          <View style={styles.bar}>
           <Text>{"#"+props.id}</Text>
           <Text>{Obj.priLen + "-" + Obj.secLen + "x" + Obj.priBred + "-" + Obj.secBred + "::" + Obj.unit}</Text>
           <Text>{props.pcs+"pcs"}</Text>
          </View>
          
          
        </Pressable>
        
        
        
        
      </View>
    );
}

const styles = StyleSheet.create({
    containers: {
     
     margin:10,   
     backgroundColor: '#818894',
     flexDirection:'row'
    },
    bar:{
      
      paddingRight:20,
      
    },
    // mainbar:{
    //   position:'absolute',
    //   left:250,
    // },

    testbar: {
      flex:1,
      width:40,
      height:'auto',
      


    }
  });