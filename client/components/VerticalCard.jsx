import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const VerticalCard = ({ item }) => {
	return (
		<FlatList
			data={item}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<View
					className={`bg-gray-200 w-full h-36 p-5 mb-4 justify-start items-start rounded-xl `}
				>
					<View className="flex-row">
						<Image
							source={{
								uri: item.pictureURL,
							}}
							className={`w-20 mr-2 h-20 rounded-full `}
						/>
						<View>
							<Text className={`text-2xl font-psemibold`}>{item.name}</Text>
							<Text className={`text-xl text-gray-700 font-pregular`}>
								สมาชิก {item.customers} คน
							</Text>
							<Text className={`text-xl text-gray-700 font-pregular`}>
								{item.leader_name}
							</Text>
						</View>
					</View>
				</View>
			)}
		/>
	);
};

export default VerticalCard;
