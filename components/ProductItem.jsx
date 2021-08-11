import React, { useContext } from 'react';
import {
	Alert,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import cart from '../assets/cart.png';
import { addToCart } from '../context/itemContext/ItemActions';
import { ItemContext } from '../context/itemContext/ItemContext';

export default function ProductItem(props) {
	const { dispatch } = useContext(ItemContext);
	const { src, title } = props;

	const handlePress = () => {
		Alert.alert(`Add '${title}' to cart ?`, ``, [
			{
				text: 'Cancel',
				style: 'cancel',
			},
			{
				text: 'OK',
				onPress: () => {
					dispatch(addToCart(props));
				},
			},
		]);
	};

	return (
		<View style={styles.container}>
			<Image source={src} style={styles.image} />
			<View style={styles.info}>
				<Text style={styles.text}>{title}</Text>
				<View style={styles.priceRow}>
					<Text style={styles.price}>5 $</Text>
					<TouchableOpacity
						activeOpacity={0.6}
						style={styles.buyBtn}
						onPress={handlePress}
					>
						<Image source={cart} style={styles.icon}></Image>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 16,
		alignItems: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	info: {
		alignItems: 'center',
		width: '100%',
	},
	text: {
		marginVertical: 16,
		fontSize: 24,
		fontWeight: 'bold',
	},
	priceRow: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buyBtn: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 8,
		backgroundColor: 'thistle',
	},
	icon: {
		width: 16,
		height: 16,
	},
});
