import { View, Text, TextInput, Image, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HorizontalCard from "../../components/HorizontalCard";

const Explore = () => {
	const exploreData = [
		{
			id: "1",
			count: 100,
			icon: "emoji-happy",
			title: "ลูกค้าที่ซื้อสินค้า",
			colorStyle: "bg-green-500",
		},
		{
			id: "2",
			count: 200,
			icon: "emoji-neutral",
			title: "ลูกค้าที่ยังไม่ตัดสินใจ",
			colorStyle: "bg-yellow-500",
		},
		{
			id: "3",
			count: 300,
			icon: "emoji-sad",
			title: "ลูกค้าที่ไม่ซื้อสินค้า",
			colorStyle: "bg-red-400",
		},
	];

	return (
		<SafeAreaView className="bg-sky-500 flex-1 pt-4">
			<View className="px-4 items-start mb-5">
				{/* <Image source={icons.team_survey} className="w-28 h-28" /> */}
				{/* <Text className="text-3xl font-pbold text-white">Team</Text> */}
				<HorizontalCard item={exploreData} />
			</View>

			<View className="flex-row items-center bg-gray-200 rounded-xl px-3 mx-4 mb-5 shadow-lg">
				<TextInput
					placeholder="ค้นหาทีม"
					placeholderTextColor="#9ca3af"
					className="font-pregular flex-1 text-lg text-gray-800 py-2"
				/>
			</View>
		</SafeAreaView>
	);
};

export default Explore;
