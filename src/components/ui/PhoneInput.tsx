import { View, Text, Pressable, TextInput } from 'react-native'
import React, { FC } from 'react'
import { phoneStyles } from '@unistyles/phoneStyles';
import { useStyles } from 'react-native-unistyles';
import Icon from '@components/global/Icon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomText from '@components/global/CustomText';

interface PhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onFocus: () => void;
    onBlur: () => void;
}

const PhoneInput:FC<PhoneInputProps> = ({value, onChangeText, onBlur, onFocus}) => {
    const { styles } = useStyles(phoneStyles)
    return (
        <View style={styles.container}>
            <Pressable style={styles.countryPickerContainer}>
                <CustomText variant='h2'>🇮🇳</CustomText>
                <Icon 
                    iconfamily='Ionicons'
                    name='caret-down-sharp'
                    size={20}
                    color={Colors.lightText}
                />
            </Pressable>

            <View style={styles.phoneInputContainer}>
                <CustomText fontFamily='Okara-Bold'>+91</CustomText>
                <TextInput 
                    placeholder='Enter your phone number'
                    keyboardType='phone-pad'
                    value={value}
                    maxLength={10}
                    placeholderTextColor={Colors.lightText}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={styles.input}
                />
            </View>
        </View>
    )
}

export default PhoneInput