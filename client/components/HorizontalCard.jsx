import { View, Text, FlatList } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const HorizontalCard = ({ item }) => {
	return (
		<FlatList
			data={item}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<View
					className={`bg-gray-200 w-64 h-44 p-5 ${item.containerStyle} justify-start items-start rounded-xl shadow-md`}
				>
					<View
						className={`w-10 h-10 mb-3 items-center justify-center  rounded-full ${item.colorStyle}`}
					>
						{item.iconStyle === "AntDesign" ? (
							<AntDesign name={item.icon} color={"white"} size={26} />
						) : (
							<Entypo name={item.icon} size={26} />
						)}
					</View>
					<Text className={`text-2xl font-psemibold text-center`}>
						{item.count}
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
