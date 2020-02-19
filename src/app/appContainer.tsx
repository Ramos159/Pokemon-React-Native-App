import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppTab from './appTab'

export default function AppContainer() {
    return(
        <NavigationContainer>
            <AppTab/>
        </NavigationContainer>
    )
}
