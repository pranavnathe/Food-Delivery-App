import React, { FC } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface IconProps {
    color?: string;
    size: number;
    name: string;
    iconfamily: "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons";
}

const Icon:FC<IconProps> = ({ color, size, name, iconfamily }) => {
    return (
        <>
        {iconfamily === "Ionicons" && (<Ionicons name={name} size={size} color={color}/>)}
        {iconfamily === "MaterialIcons" && (<MaterialIcons name={name} size={size} color={color}/>)}
        {iconfamily === "MaterialCommunityIcons" && (<MaterialCommunityIcons name={name} size={size} color={color}/>)}
        </>
    )
}

export default Icon