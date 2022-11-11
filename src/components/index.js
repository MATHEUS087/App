import React, { Component } from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import App from './App';
import registro from './registro';
        
const MainNav = createStackNavigator (
    {
        App: {
            screen: App,
            navigationOptions: {
                header: null
            }
        },
        registro: {
            Screen: registro,
            navigationOptions: {
                headerTitle: 'registro'
            }
        }
    }
)

export default createAppContainer(MainNav);