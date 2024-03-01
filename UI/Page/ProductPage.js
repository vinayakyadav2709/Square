import {useState} from 'react';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';


import HomeTitle from '../Uielements/HomeTitle';
import ProductCard from '../Containers/ProductCard';
import SizePage from './SizePage'



export default function ProductPage(props) {
    const [sizepageState,sizemodalSetter] = useState(false);



    return (
     
        <View>
            <HomeTitle title="Product Page"></HomeTitle>
            <View style={styles.inputcontainer}>
                <TextInput placeholder='Name'></TextInput>
                <TextInput placeholder='Phone number'></TextInput>
                <TextInput placeholder='Location'></TextInput>
            </View>
            <View>
                <Text>Products</Text>
                <ProductCard id={1}productname={"Glass"} rate={"200"} pcs="100" amount="1000" modalVisibility={sizemodalSetter}></ProductCard>
            </View>
            <View>
                <Text>Total pcs: {4545}</Text>
                <Text>Total amount: {454577}</Text>
                {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
               
                <Modal visible={sizepageState}><SizePage sizeModal={sizemodalSetter}></SizePage></Modal>
                <Button title="Add Size" onPress={()=>{sizemodalSetter(true)}}></Button>
                <Button title="Save" onPress={()=>{props.modalState(false)}}></Button>
            </View>
            
                
            
        </View>
    );
}

const styles = StyleSheet.create({
    titletext: {
        color: 'white',
    },
    inputcontainer: {
        backgroundColor: "#8884e2",
        padding: 20,
        marginTop: 20,
    },
});