import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import DetailItem from './screens/DetailItem';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
	colors: {
		background: 'white',
	},
};

export default function App() {
	return (
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen
					name="Details"
					component={DetailItem}
					options={({ route }) => ({ title: route.params.title })}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
