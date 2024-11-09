import { View, Text, StatusBar, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import user from "../../constants/mocks";

const Profile = () => {
	return (
		<>
			<StatusBar barStyle="dark-content" translucent={false} />
			<SafeAreaView className="bg-white h-full justify-start pt-2 items-center">
				<Image
					source={{ uri: user.profileURL }}
					className="w-32 h-32 rounded-full"
					resizeMode="contain"
				/>
				<Text>{user.username}</Text>
			</SafeAreaView>
		</>
	);
};

export default Profile;
