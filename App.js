import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemContextProvider, {
	ItemContext,
} from './context/itemContext/ItemContext';
import Cart from './screens/Cart';
import DetailItem from './screens/DetailItem';
import Home from './screens/Home';
import Orders from './screens/Orders';
import Settings from './screens/Settings';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
	colors: {
		background: 'white',
	},
};

function HomeTabs() {
	const { state } = useContext(ItemContext);
	const numberItems = state.length;

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color }) => {
					let iconName;

					if (route.name === 'Home') {
						iconName = focused ? 'ios-home' : 'ios-home-outline';
					} else if (route.name === 'Cart') {
						iconName = focused ? 'ios-cart' : 'ios-cart-outline';
					} else if (route.name === 'Orders') {
						iconName = focused ? 'ios-basket' : 'ios-basket-outline';
					} else if (route.name === 'Settings') {
						iconName = focused ? 'ios-settings' : 'ios-settings-outline';
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={32} color={color} />;
				},
				tabBarActiveTintColor: 'salmon',
				tabBarInactiveTintColor: 'gray',
				tabBarBadgeStyle: {
					backgroundColor: 'salmon',
					color: 'white',
				},
			})}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen
				name="Cart"
				component={Cart}
				options={{ tabBarBadge: numberItems }}
			/>
			<Tab.Screen name="Orders" component={Orders} />
			<Tab.Screen name="Settings" component={Settings} />
		</Tab.Navigator>
	);
}

function HomeStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeTab" component={HomeTabs} />
			<Stack.Screen
				name="Details"
				component={DetailItem}
				options={({ route }) => ({ title: route.params.title })}
			/>
		</Stack.Navigator>
	);
}

export default function App() {
	return (
		<ItemContextProvider>
			<NavigationContainer theme={MyTheme}>
				<HomeStack />
			</NavigationContainer>
		</ItemContextProvider>
	);
}
