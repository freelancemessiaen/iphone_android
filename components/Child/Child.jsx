import { TouchableOpacity, Text } from "react-native";
export function Child( {onPress}) {
    function onPress_(){
        onPress("les dev")
    }
    return (
      <>
        <TouchableOpacity onPress={onPress_}>
            <Text>Cliquez içi</Text>
        </TouchableOpacity>
    </>
    )
}