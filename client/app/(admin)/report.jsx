import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Report = () => {
	const reportData = [
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
		<SafeAreaView className="bg-white h-full">
			<Text>Report</Text>
		</SafeAreaView>
	);
};

export default Report;
