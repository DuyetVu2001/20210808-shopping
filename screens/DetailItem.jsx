import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ProductItem from '../components/ProductItem';

export default function DetailItem({ route }) {
	const { src } = route.params;
	const data = [
		{ id: 1, title: 'hi 1', src },
		{ id: 2, title: 'hi 12', src },
		{ id: 3, title: 'hi 13', src },
		{ id: 4, title: 'hi 14', src },
		{ id: 5, title: 'hi 15', src },
		{ id: 6, title: 'hi 16', src },
		{ id: 7, title: 'hi 17', src },
		{ id: 8, title: 'hi 18', src },
		{ id: 9, title: 'hi 19', src },
		{ id: 10, title: 'hi 20', src },
	];

	return (
		<FlatList
			data={data}
			contentContainerStyle={styles.container}
			renderItem={({ item }) => (
				<View style={styles.wrapper}>
					<ProductItem {...item} style={styles.image} />
				</View>
			)}
			keyExtractor={(item) => `${item.id}`}
			numColumns={2}
		></FlatList>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 8,
		paddingTop: 8,
	},

	wrapper: {
		flex: 1,
		alignItems: 'center',
		margin: 8,
		borderRadius: 12,
		backgroundColor: 'seashell',
	},
});
