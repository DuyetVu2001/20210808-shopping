import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Category(props) {
	const { title, src } = props;

	return (
		<View style={styles.container}>
			<Text style={styles.text}>{title}</Text>
			<Image source={src} style={styles.image} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 12,
		backgroundColor: 'seashell',
		marginBottom: 16,
		alignItems: 'center',
		padding: 24,
	},

	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'salmon',
		marginBottom: 8,
	},

	image: {
		width: 60,
		height: 60,
	},
});
