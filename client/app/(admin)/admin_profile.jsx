import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import mocks from "../../constants/mocks";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const AdminProfile = () => {
	const user = mocks.user;
	return (
		<>
			<View className="bg-white">
				<ScrollView className="h-full">
					<View className="absolute top-[-80px] left-0 w-full h-72 bg-blue-500 z-0 rounded-b-full" />
					<SafeAreaView className=" justify-start items-center py-6 z-10">
						<Text className="text-2xl font-pbold mb-4 text-white">
							ข้อมูลส่วนตัว
						</Text>
						<Image
							source={{ uri: user.profileURL }}
							className="w-40 h-40 rounded-full shadow-black shadow-2xl"
							resizeMode="cover"
						/>

						<View className=" w-full h-full justify-start items-center self-center rounded-3xl mt-2 px-4">
							<View className="flex justify-center items-center">
								<Text className="font-psemibold mb-2 mt-1 text-3xl">
									{user.username}
								</Text>
								<View className="bg-blue-500 h-40 w-full mx-2 rounded-xl justify-center items-start p-5">
									<View className="flex-row items-center">
										<Text
											className="font-psemibold text-lg text-gray-100"
											style={{ width: 70 }}
										>
											ชื่อ-สกุล:
										</Text>
										<Text className="font-pmedium text-lg text-white flex-1">
											{user.firstname}
										</Text>
									</View>
									<View className="flex-row items-center">
										<Text
											className="font-psemibold text-lg text-gray-100"
											style={{ width: 70 }}
										>
											อีเมลล์:
										</Text>
										<Text className="font-pmedium text-lg text-white flex-1">
											{user.email}
										</Text>
									</View>
									<View className="flex-row items-center">
										<Text
											className="font-psemibold text-lg text-gray-100"
											style={{ width: 70 }}
										>
											เบอร์โทร:
										</Text>
										<Text className="font-pmedium text-lg text-white flex-1">
											{user.phone_number}
										</Text>
									</View>
									<View className="flex-row items-center">
										<Text
											className="font-psemibold text-lg text-gray-100"
											style={{ width: 70 }}
										>
											ตำเเหน่ง:
										</Text>
										<Text className="font-pmedium text-lg text-white flex-1">
											{user.role.name === "Admin" ? "ผู้ดูแล" : "ไม่พบ"}
										</Text>
									</View>
								</View>

								{/* <View className="bg-blue-400 justify-center items-center h-32 w-52 rounded-xl mx-2">
								<MaterialIcons name="local-phone" size={24} color={"white"} />
								<Text className="text-white font-pmedium">
									{user.phone_number}
								</Text>
							</View> */}
								{/* <View className="bg-blue-500 h-32 w-32 rounded-xl" /> */}
							</View>
							<View className="flex-row items-center mt-5">
								<View className="flex-1 h-[1px] bg-gray-300 rounded-full" />
							</View>

							<TouchableOpacity className="bg-blue-500 flex-row w-full items-center justify-center h-14 mt-5 rounded-full">
								{/* <MaterialCommunityIcons
								name="account-edit"
								size={24}
								color={"white"}
							/> */}
								<Text className="font-psemibold mx-2 text-white text-center">
									เเก้ไขข้อมูลส่วนตัว
								</Text>
							</TouchableOpacity>
							<TouchableOpacity className="bg-blue-500 w-full h-14 justify-center mt-3 rounded-full">
								<Text className="font-psemibold mx-2 text-white text-center">
									แจ้งปัญหาการใช้งาน
								</Text>
							</TouchableOpacity>

							<TouchableOpacity className="bg-red-500 w-full flex-row justify-center items-center h-14 mt-3 rounded-full">
								<View>
									<Feather name="log-out" size={24} color={"white"} />
								</View>
								<Text className="font-psemibold mx-2 text-white text-center">
									ออกจากระบบ
								</Text>
							</TouchableOpacity>
						</View>

						{/* <View className=" rounded-2xl bg-[#FFB6C1] justify-start items-center py-3 mt-5 px-8 bg-opacity-20">
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
					</View> */}
					</SafeAreaView>
				</ScrollView>
			</View>
		</>
	);
};

export default AdminProfile;
