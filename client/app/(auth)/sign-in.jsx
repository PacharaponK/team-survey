import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext, ContextProvider } from "../../contexts/Auth.context";
import icons from "../../constants/icons";
import { router } from "expo-router";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const authContext = useContext(AuthContext);
	const { login } = authContext;

	const handleSignIn = () => {
		login(email, password);
	};

	if (authContext?.state.role == "admin") {
		router.replace("/admin_home");
	}

	if (authContext?.state.role == "team_leader") {
		router.replace("/teamleader_home");
	}

	if (authContext?.state.role == "team_worker") {
		router.replace("/teamworker_home");
	}

	return (
		<ContextProvider>
			<View className="flex-1 justify-center items-center bg-white px-6 z-10">
				{/* <View className="absolute top-0 left-0 w-full h-3/4 bg-white z-1">
					<Text className="text-black text-lg font-pmedium absolute left-20 top-10">
						ยินดีต้อนรับ
					</Text>
					<Text className="text-black text-lg font-pmedium absolute left-1 top-10">
						สวัสดีค่ะ
					</Text>
					<Text className="text-black text-lg font-pmedium absolute right-0 top-20">
						สวัสดีครับ
					</Text>
					<Text className="text-black text-lg font-pmedium absolute left-2 top-20">
						ร่วมเป็นครอบครัว
					</Text>
				</View> */}
				<View className="flex-row w-fit h-fit items-center mb-8">
					<View className="w-28 h-28 rounded-lg items-center justify-center mb-4">
						<Image source={icons.team_survey} className="w-28 h-28" />
					</View>
					<View className="ml-4">
						<Text className="text-5xl font-pbold text-black leading-[1.2]">
							Team Survey
						</Text>
						<Text className="text-5xl font-pmedium text-gray-800 leading-[1.2]">
							ลงชื่อเข้าใช้
						</Text>
					</View>
				</View>

				<View className="w-full mb-4">
					<Text className="text-sm font-pregular text-gray-700">
						ชื่อผู้ใช้ :
					</Text>
					<TextInput
						value={email}
						onChangeText={setEmail}
						className="border border-gray-300 rounded-lg p-4 mt-2"
						placeholder="กรอกชื่อผู้ใช้ของคุณ"
					/>
				</View>

				<View className="w-full mb-6">
					<Text className="text-sm font-pregular text-gray-700">
						รหัสผ่าน :
					</Text>
					<TextInput
						value={password}
						onChangeText={setPassword}
						className=" border border-gray-300 rounded-lg p-4 mt-2"
						placeholder="กรอกรหัสผ่าน"
						secureTextEntry
					/>
				</View>

				<TouchableOpacity
					onPress={handleSignIn}
					className="w-full bg-blue-500 py-4 rounded-lg"
				>
					<Text className="text-white font-psemibold text-lg text-center">
						เข้าสู่ระบบ
					</Text>
				</TouchableOpacity>

				<View className="mt-6 flex-row items-center justify-center">
					<Text className="text-sm font-plight text-center text-gray-500 z-10">
						ยังไม่มีบัญชีใช่ไหม?{" "}
					</Text>
					<TouchableOpacity>
						<Text className="text-pink font-pbold">ลงทะเบียน</Text>
					</TouchableOpacity>
				</View>
				<View className="absolute bottom-[-90px] w-full h-1/3 items-center z-0">
					<View className="w-[600px] h-[600px] bg-blue-500 rounded-full absolute bottom-[-400px] right-0" />
				</View>
			</View>
		</ContextProvider>
	);
};

export default SignIn;
