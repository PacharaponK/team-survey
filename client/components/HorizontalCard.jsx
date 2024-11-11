import { View, Text, FlatList } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const HorizontalCard = ({ item }) => {
	return (
		<FlatList
			data={item}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<View
					className={`bg-gray-200 w-64 h-44 p-5 m-4 justify-start items-start rounded-xl shadow-md`}
				>
					<View
						className={`w-10 h-10  ${item.colorStyle} mb-3 items-center justify-center rounded-full shadow-2xl`}
					>
						<Entypo name={item.icon} size={26} />
					</View>
					<Text className={`text-2xl font-psemibold text-center`}>
						{item.count} คน
					</Text>
					<Text className={`text-xl text-gray-500 font-pregular`}>
						{item.title}
					</Text>
				</View>
			)}
			horizontal
			showsHorizontalScrollIndicator={false}
		/>
	);
};

export default HorizontalCard;
