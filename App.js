import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';

export default function App() {
	return (
		<View style={styles.container}>
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingRight: 16,
		paddingLeft: 16,
		backgroundColor: '#fff',
	},
});
