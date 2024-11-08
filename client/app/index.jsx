import "../global.css";
import { Text, View } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

export default function Index() {
	return (
		<View className="flex-1 justify-center items-center h-screen">
			<Text className="text-3xl font-pbold px-10">Team Survey</Text>
			<Text className="text-xl font-psemibold px-10">
				ธุรกิจขายตรงที่จะพาคุณไปสู่เป้าหมายที่สูงสุด
			</Text>
			<CustomButton
				title="เข้าสู่ระบบ"
				handlePress={() => router.push("/sign-in")}
				containerStyles="lg:w-2/4 w-3/4  bg-sky-600 mt-7"
			/>
		</View>
	);
}
