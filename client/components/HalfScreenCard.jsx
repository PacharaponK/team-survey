import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

const HalfScreenCard = ({
	icon,
	name,
	description,
	contianerStyle,
	iconStyle,
}) => {
	return (
		<TouchableOpacity
			className={`bg-blue-500 h-44 rounded-xl ${contianerStyle} px-2 items-start justify-start w-52 `}
			style={{
				shadowColor: "#000",
				shadowOffset: {
					width: 0,
					height: 7,
				},
				shadowOpacity: 0.43,
				shadowRadius: 9.51,

				elevation: 15,
			}}
		>
			<View className="bg-black-200 mt-5 p-2 mb-2 rounded-full">
				{iconStyle === "Entypo" ? (
					<Entypo name={icon} color={"white"} size={32} />
				) : (
					<AntDesign name={icon} color={"white"} size={32} />
				)}
			</View>
			<Text className="font-psemibold text-xl text-white">{name}</Text>
			<Text className="font-pregular text-lg text-gray-100">{description}</Text>
		</TouchableOpacity>
	);
};

export default HalfScreenCard;
