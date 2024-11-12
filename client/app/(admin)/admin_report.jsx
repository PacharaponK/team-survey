import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import HalfScreenCard from "../../components/HalfScreenCard";

const AdminReport = () => {
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
		<ScrollView>
			<SafeAreaView className="bg-white h-full">
				<View
					className="absolute top-[-80px] left-0 w-full h-72 bg-blue-500 z-0"
					style={{}}
				/>

				<View className="px-4 bg-blue-500 mb-4">
					<Text className="text-3xl font-pbold text-gray-100">ค้นหา</Text>
					<Text className="text-3xl font-pbold text-white">รายงานผลสำรวจ</Text>
					<View className="flex-row items-center bg-gray-200 w-5/6 rounded-xl mt-2 mb-4 shadow-lg">
						<TextInput
							placeholder="แบบไหนที่คุณต้องการ..."
							placeholderTextColor="#9ca3af"
							className="font-pregular flex-1 px-2 text-lg text-gray-800 py-2"
						/>
						<TouchableOpacity className="mr-3">
							<AntDesign
								name="filter"
								size={24}
								color="#9ca3af"
								className="ml-2"
							/>
						</TouchableOpacity>
					</View>
				</View>
				<Text className="font-pbold text-2xl px-4 mb-2">
					กราฟและการวิเคราะห์
				</Text>
				<View className="flex-row mb-3 justify-between">
					<HalfScreenCard
						icon="piechart"
						name={"แผนภูมิวงกลม"}
						description={"วิเคราะห์การผลการสำรวจแบบเเผนภูมิวงกลม"}
						contianerStyle={"mx-4"}
					/>
					<HalfScreenCard
						icon="barchart"
						name={"แผนภูมิแท่ง"}
						description={"วิเคราะห์การผลการสำรวจแบบเเผนแท่ง"}
						contianerStyle={"mr-4"}
					/>
				</View>
				<View className="flex-row mb-3 justify-between">
					<HalfScreenCard
						icon="areachart"
						name={"กราฟเส้น"}
						description={"วิเคราะห์การผลการสำรวจแบบกราฟเส้น"}
						contianerStyle={"mx-4"}
					/>
					<HalfScreenCard
						icon="ellipsis1"
						name={"อื่นๆ"}
						description={"วิเคราะห์การผลการสำรวจแบบอื่นๆ"}
						contianerStyle={"mr-4"}
					/>
				</View>
				<View className="flex-row items-center mt-5 px-4">
					<View className="flex-1 h-[5px] bg-gray-300 rounded-full" />
				</View>
				<Text className="font-pbold text-2xl px-4 mb-2 mt-4">ผลการสำรวจ</Text>
				<View className="flex-row mb-3 justify-between">
					<HalfScreenCard
						icon="user"
						name={"ลูกค้าทั้งหมด"}
						description={"แสดงผลรายละเอียดลูกค้าทั้งหมด"}
						contianerStyle={"mx-4"}
					/>
					<HalfScreenCard
						icon="emoji-happy"
						name={"ลูกค้าที่ซื้อสินค้า"}
						description={"แสดงผลรายละเอียดลูกค้าที่ซื้อสินค้า"}
						contianerStyle={"mr-4"}
						iconStyle="Entypo"
					/>
				</View>
				<View className="flex-row mb-3 justify-between">
					<HalfScreenCard
						icon="emoji-neutral"
						name={"ลูกค้าที่ยังไม่ตัดสินใจ"}
						description={"แสดงผลรายละเอียดลูกค้าที่ยังไม่ตัดสินใจ"}
						contianerStyle={"mx-4"}
						iconStyle="Entypo"
					/>
					<HalfScreenCard
						icon="emoji-sad"
						name={"ลูกค้าที่ไม่ซื้อสินค้า"}
						description={"แสดงผลรายละเอียดลูกค้าที่ไม่ซื้อสินค้า"}
						contianerStyle={"mr-4"}
						iconStyle="Entypo"
					/>
				</View>
				<View className="flex-row items-center mt-5 px-4">
					<View className="flex-1 h-[5px] bg-gray-300 rounded-full" />
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

export default AdminReport;
