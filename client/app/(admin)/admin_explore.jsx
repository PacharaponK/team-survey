import {
	View,
	Text,
	TextInput,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HorizontalCard from "../../components/HorizontalCard";
import VerticalCard from "../../components/VerticalCard";
import mocks from "../../constants/mocks";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const AdminExplore = () => {
	return (
		<SafeAreaView className="bg-blue-500 flex-1 pt-4">
			<View className="px-4 items-start ">
				{/* <Image source={icons.team_survey} className="w-28 h-28" /> */}
				<Text className="text-3xl font-pbold text-white">ระบบจัดการทีม</Text>
				<HorizontalCard item={mocks.exploreData} />
			</View>
			<TouchableOpacity
				onPress={() => router.replace("/create_team")}
				className="flex-row items-center justify-center h-16 px-3 mx-4 mb-4 bg-gray-200 rounded-3xl"
			>
				<AntDesign name={"pluscircle"} color={"black"} size={24} />
				<Text className="text-2xl font-pbold px-4 mt-1 text-black">
					สร้างทีม
				</Text>
			</TouchableOpacity>

			<View className="flex-row items-center bg-gray-200 rounded-xl px-3 mx-4 mb-4 shadow-lg">
				<TextInput
					placeholder="ค้นหาทีม"
					placeholderTextColor="#9ca3af"
					className="font-pregular flex-1 text-lg text-gray-800 py-2"
				/>
			</View>
			<View className="px-4">
				<VerticalCard item={mocks.team} />
			</View>
		</SafeAreaView>
	);
};

export default AdminExplore;
