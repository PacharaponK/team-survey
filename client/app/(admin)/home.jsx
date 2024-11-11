import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import data from "../../constants/mocks";

const Home = () => {
	const user = data.user;

	const activities = [
		{
			id: "1",
			name: "Supamo",
			action: "ได้เข้าร่วมทีม หมูป่านมี้",
			time: "1 วันที่แล้ว",
		},
		{
			id: "2",
			name: "Supamo",
			action: "เพิ่มลูกค้าที่ สนใจ จำนวน 1 คน",
			time: "1 วันที่แล้ว",
		},
		{
			id: "3",
			name: "Supamo",
			action: "เพิ่มลูกค้าที่ สนใจ จำนวน 1 คน",
			time: "1 วันที่แล้ว",
		},
		{
			id: "4",
			name: "Supamo",
			action: "เพิ่มลูกค้าที่ สนใจ จำนวน 1 คน",
			time: "1 วันที่แล้ว",
		},
		{
			id: "5",
			name: "Supamo",
			action: "เพิ่มลูกค้าที่ สนใจ จำนวน 1 คน",
			time: "1 วันที่แล้ว",
		},
		{
			id: "6",
			name: "Supamo",
			action: "เพิ่มลูกค้าที่ สนใจ จำนวน 1 คน",
			time: "1 วันที่แล้ว",
		},
		{
			id: "7",
			name: "Supamo",
			action: "ได้เข้าร่วมทีม หมูป่านมี้",
			time: "1 วันที่แล้ว",
		},
		{
			id: "8",
			name: "Supamo",
			action: "ได้เข้าร่วมทีม หมูป่านมี้",
			time: "1 วันที่แล้ว",
		},
		{
			id: "9",
			name: "Supamo",
			action: "ได้เข้าร่วมทีม หมูป่านมี้",
			time: "1 วันที่แล้ว",
		},
		{
			id: "10",
			name: "Supamo",
			action: "ได้เข้าร่วมทีม หมูป่านมี้",
			time: "1 วันที่แล้ว",
		},
	];

	const renderItem = ({ item }) => (
		<View className="flex-row items-center py-2 px-2 rounded-2xl bg-blue-500 w-full mb-2">
			<Image
				source={{
					uri: "https://i.pinimg.com/736x/f6/11/b6/f611b6e18590055497879a482e37a594.jpg",
				}}
				className="w-14 h-14 rounded-full mr-3"
			/>
			<View className="">
				<Text className="font-pbold text-white ">{item.name}</Text>
				<Text className="font-pmedium text-white">{item.action}</Text>
				<Text className="text-gray-100 font-pregular">{item.time}</Text>
			</View>
		</View>
	);

	return (
		<FlatList
			data={[1]}
			renderItem={() => (
				<View className="bg-white flex-1">
					<StatusBar backgroundColor="" style="light" />
					<View className="bg-blue-500 px-5 pt-16 pb-8 rounded-b-[30px] relative">
						<View className="flex-row justify-start items-start">
							<Image
								source={{
									uri: user.profileURL,
								}}
								className="w-24 h-24 mr-4 rounded-full"
							/>
							<View className="items-start">
								<Text className="text-white text-lg font-psemibold">
									ยินดีต้อนรับกลับมา
								</Text>
								<Text className="text-white text-2xl font-psemibold">
									{user.username}
								</Text>
								<Text className="text-white text-xl font-pregular">
									{user.firstname} {user.lastname}
								</Text>
							</View>
						</View>
						<FontAwesome
							name="bell"
							size={24}
							color="white"
							className="absolute right-6 top-[60px]"
						/>
					</View>

					<View className="p-5">
						{/* <View className="flex-row items-center">
							<Text className="text-lg font-pmedium">จำนวนลูกค้าทั้งหมด</Text>
							<Text className="text-xl font-pbold text-pink ml-1">500,000</Text>
							<Text className="text-lg font-pmedium ml-1">คน</Text>
						</View> */}
						<View className="h-48 bg-gray-100 rounded-lg my-2 flex justify-center items-center">
							<Text className="text-gray-500">Pie Chart Placeholder</Text>
						</View>
						<View className="h-48 bg-gray-100 rounded-lg mt-2 flex justify-center items-center">
							<Text className="text-gray-500">Line Chart Placeholder</Text>
						</View>
					</View>

					{/* Activity Log Section */}
					<View className="px-5">
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
							<View>
								<Text className="align-center text-center mt-2 mx-2 font-pmedium mb-2 text-2xl">
									บันทึกการทำงาน
								</Text>
							</View>
							<View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
						</View>
						<FlatList
							data={activities}
							keyExtractor={(item) => item.id}
							renderItem={renderItem}
						/>
					</View>
				</View>
			)}
		/>
	);
};

export default Home;
