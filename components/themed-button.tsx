import { StyleSheet, Pressable, type ButtonProps, StyleProp, ViewStyle, PressableProps} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/theme'

function ThemedButton({ style, ...props }: { style?: StyleProp<ViewStyle> } & PressableProps) {
    return (
        <Pressable 
        style={({pressed}) => [styles.btn, pressed && styles.pressed, style]}
        {...props}
        />
    )

}
const styles = StyleSheet.create({
    btn:{
        backgroundColor: Colors.primary,
        padding: 18,
        borderRadius: 6,
        marginVertical: 10
    },
    pressed: {
        opacity: 0.5
    },
})

export default ThemedButton