import "../global.css";
import { Image, Text, View } from "react-native";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";
import icons from "../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function Index() {
	return (
		<>
			<StatusBar backgroundColor="#fff" style="dark" />
			<SafeAreaView className="flex-1 bg-white">
				<View className="flex-1 justify-center items-center h-screen bg-white">
					<View className="absolute top-0 left-0 w-full h-3/4 bg-white z-1">
						{/* <Text className="text-black text-lg font-pmedium absolute left-5">
							ซื้อเถอะครับ
						</Text>
						<Text className="text-black text-lg font-pmedium absolute left-20 top-10">
							หัวมันมากกก
						</Text>
						<Text className="text-black text-lg font-pmedium absolute left-36 top-20">
							สวัสดี
						</Text> */}
						<Text className="text-black font-pbold text-9xl absolute left-0 bottom-56">
							XX
						</Text>
						<Text className="text-black font-pbold text-9xl absolute left-0 bottom-[265px]">
							XXX
						</Text>
						<Text className="text-black font-pbold text-9xl absolute right-0 bottom-[265px]">
							XXX
						</Text>
						<Text className="text-black font-pbold text-9xl absolute right-0 bottom-56">
							XXX
						</Text>
					</View>

					<View className="absolute bottom-0 w-full h-1/3 items-center z-0">
						<View className="w-[600px] h-[600px] bg-blue-500 rounded-full absolute bottom-[-400px]" />
					</View>

					<View className="absolute top-60 z-10 items-center">
						<View className="bg-white rounded-full p-4 shadow-lg mb-5">
							<Image
								source={icons.team_survey}
								className="w-48 h-48"
								resizeMethod="contain"
							/>
						</View>
						<Text className="text-3xl font-pbold">Team Survey</Text>
						<Text className="text-xl font-psemibold text-center px-10">
							ให้เราพาธุรกิจของคุณไปสู่เป้าหมาย!
						</Text>
						<Text className="text-md font-pregular px-10 text-center">
							ตัวช่วยธุรกิจขายตรงที่จะพาคุณไปสู่เป้าหมายที่สูงสุด!
						</Text>
					</View>

					{/* Button positioned at the bottom */}
					<View className="absolute bottom-14 w-full items-center z-10">
						<CustomButton
							title="เข้าสู่บ้านของเรา กดเลย!!"
							handlePress={() => router.push("/sign-in")}
							containerStyles="lg:w-2/4 w-3/4 bg-white rounded-full py-3 shadow-md"
							textStyle="text-black font-pbold"
						/>
					</View>
				</View>
			</SafeAreaView>
		</>
	);
}
