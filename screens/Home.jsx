import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import IMG1 from '../assets/img1.png';
import IMG2 from '../assets/img2.png';
import IMG3 from '../assets/img3.png';
import IMG4 from '../assets/img4.png';
import IMG5 from '../assets/img5.png';
import Category from '../components/Category';

export default function Home() {
	const [items] = useState([
		{ id: 1, title: 'Burger', src: IMG1 },
		{ id: 2, title: 'Fast food', src: IMG2 },
		{ id: 3, title: 'Salad', src: IMG3 },
		{ id: 4, title: 'Meat', src: IMG4 },
		{ id: 5, title: 'Wine', src: IMG5 },
	]);

	return (
		<FlatList
			data={items}
			renderItem={({ item }) => <Category {...item} />}
			keyExtractor={(item) => `${item.id}`}
			style={styles.container}
			showsVerticalScrollIndicator={false}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 32,
	},
});
