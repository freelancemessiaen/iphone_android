import { Image,Text, View } from "react-native"
import { car, drive } from "./Animal"
export function Human ({firstName, name, age,children}) {
    return  (
    <>      
        <Text>
            Mon prénom est {firstName} et mon prénom est {name} {"\n"}et j'ai {age}
        </Text>
         {children}
    </>

    )
}