import { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import {AgeDisplay} from '../AgeDisplay/AgeDisplay'
export function AgeCounter() {
    var [age,setAge] = useState(30);
    function increaseAge(){
        setAge(age + 1)
    }
    return (
        <>
        <TouchableOpacity onPress={increaseAge}>
            <Text style={{fontSize: 40}}>Augmenter</Text>
        </TouchableOpacity>
        <AgeDisplay age={age}/>
        </>
    )
}