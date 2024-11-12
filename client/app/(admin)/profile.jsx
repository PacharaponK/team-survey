import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import mocks from "../../constants/mocks";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Profile = () => {
	const user = mocks.user;
	return (
		<>
			<View className="bg-white">
				<View className="absolute top-[-80px] left-0 w-full h-72 bg-blue-500 z-0 rounded-b-full" />
				<SafeAreaView className=" h-full justify-start items-center py-6 z-10">
					<Image
						source={{ uri: user.profileURL }}
						className="w-40 h-40 rounded-full shadow-black shadow-2xl"
						resizeMode="cover"
					/>
					<Text className="text-2xl font-psemibold mt-4  text-gray-800">
						{user.username}
					</Text>
					<Text className="text-center text-xl text-gray-600 px-4 font-pregular">
						{user.firstname} {user.lastname}
					</Text>
					<Text className="font-pregular text-lg mb-2 text-gray-600 ">
						{user.email}
					</Text>
					<View className=" rounded-2xl bg-[#FFB6C1] justify-start items-center py-3 mt-5 px-8 bg-opacity-20">
						<View className="flex-row gap-20">
							<View className="items-center">
								<Entypo name="emoji-happy" size={26} />
								<Text className="font-pmedium">100 คน</Text>
							</View>
							<View className="items-center">
								<Entypo name="emoji-neutral" size={26} />
								<Text className="font-pmedium">100 คน</Text>
							</View>
							<View className="items-center">
								<Entypo name="emoji-sad" size={26} />
								<Text className="font-pmedium">100 คน</Text>
							</View>
						</View>
					</View>
				</SafeAreaView>
			</View>
		</>
	);
};

export default Profile;
