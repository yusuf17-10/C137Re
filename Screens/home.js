import React from "react"
import {View,TouchableOpacity,Text,StyleSheet,Alert,FlatList} from "react-native"
import axios from "axios"
import { ListItem } from "react-native-elements";
export default class Home extends React.Component{
    constructor(){
        super();
        this.state={
            url:"http://localhost:5000/",
            list_data:[]
        }
    }
getPlanets=()=>{
    var url = this.state.url 
    axios.get(url).then(
        (response)=>{
            this.setState({list_data:response.data.data})
            console.log(this.state.list_data)
        }
    )
    .catch((error)=>{
        Alert.alert(error.message)
    })
    
}

componentDidMount(){
    this.getPlanets()
}

renderItem=({item,index})=>{

    <ListItem 
    
    key = {index}
    title = {`planet:${item.name}`}
    onPress={()=>{
        this.props.navigation.navigate("Detail",{planet_name:item.name})
        
    }}
    />


}

    render(){
        if(this.state.list_data.length == 0){
            return(

                <View>
                    <Text>Loding</Text>
                </View>
            )
        }else{
            return(
                <View>
                    <FlatList 
                    
                    keyExtractor={(item,index)=>index.toString()}
                    data = {this.state.list_data}
                    renderItem = {
                        this.renderItem
                    }                     
                    >

                    </FlatList>
                </View>
            )
        }   
    }

}
