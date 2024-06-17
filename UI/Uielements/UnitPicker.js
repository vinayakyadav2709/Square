import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { useMainSizePageUnit } from "../logic/SizepageUnit";

const units = ['frac','sut','mm']

export default function UnitPicker () {
    const [sizePageUnit,setsizePageUnit] = useMainSizePageUnit((state) => [
        state.sizePageUnit,
        state.setsizePageUnit
    ])
   

    return (
        <View>
          <Picker
              //style={styles.testbar}
              selectedValue={sizePageUnit}
              onValueChange={(itemValue, itemIndex) =>{
              
               setsizePageUnit(itemIndex)
             
              }
              }>
              <Picker.Item label="Fractions" value={0} />
              <Picker.Item label="Suts" value={1} />
              {/* <Picker.Item label="mm" value={2} /> */}
            </Picker>
        </View>
    )
}