import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation, tabNames }) => {
	const icons = {
		[tabNames.home]: (props) => (
			<AntDesign name="home" size={26} color={greyColor} {...props} />
		),
		[tabNames.explore]: (props) => (
			<Feather name="compass" size={26} color={greyColor} {...props} />
		),
		[tabNames.report]: (props) => (
			<AntDesign name="barschart" size={26} color={greyColor} {...props} />
		),
		[tabNames.profile]: (props) => (
			<AntDesign name="user" size={26} color={greyColor} {...props} />
		),
	};

	const primaryColor = "#FF10F0";
	const greyColor = "#737373";
	return (
		<View style={styles.tabbar}>
			{state.routes
				.filter((route) => !["create_team"].includes(route.name)) // กรอง route ที่ไม่ต้องการ
				.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name, route.params);
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: "tabLongPress",
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							key={route.name}
							style={styles.tabbarItem}
							onPress={onPress}
							onLongPress={onLongPress}
						>
							{icons[route.name]({
								color: isFocused ? primaryColor : greyColor,
							})}
							<Text
								style={{
									color: isFocused ? primaryColor : greyColor,
									fontSize: 11,
								}}
							>
								{label}
							</Text>
						</TouchableOpacity>
					);
				})}
		</View>
	);
};

const styles = StyleSheet.create({
	tabbar: {
		position: "absolute",
		bottom: 25,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#f1f1f5",
		marginHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 45,
		borderCurve: "continuous",
		shadowColor: "black",
		shadowOffset: { width: 0, height: 10 },
		shadowRadius: 10,
		shadowOpacity: 0.1,
	},
	tabbarItem: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
	},
});

export default TabBar;
