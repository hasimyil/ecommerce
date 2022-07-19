import {
    View,
    TouchableOpacity,
    Text,
    Platform,
    StyleSheet,
    Image
} from "react-native";
import { connect } from 'react-redux'

export const Initialscreen = (props) => {
  return (
   <View>
    <Text>InitialScreen</Text>
   </View>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Initialscreen)