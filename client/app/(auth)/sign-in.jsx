import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignIn = () => {
		// การจัดการลอจิกการลงชื่อเข้าใช้
		console.log("ลงชื่อเข้าใช้ด้วย", email, password);
	};

	return (
		<View className="flex-1 justify-center items-center bg-white px-6">
			<Text className="text-3xl font-psemibold text-primary mb-8">
				ลงชื่อเข้าใช้
			</Text>

			<View className="w-full mb-4">
				<Text className="text-sm font-pregular text-gray-700">อีเมล</Text>
				<TextInput
					value={email}
					onChangeText={setEmail}
					className="bg-white border border-gray-300 rounded-lg p-4 mt-2"
					placeholder="กรอกอีเมลของคุณ"
					keyboardType="email-address"
				/>
			</View>

			<View className="w-full mb-6">
				<Text className="text-sm font-pregular text-gray-700">รหัสผ่าน</Text>
				<TextInput
					value={password}
					onChangeText={setPassword}
					className="bg-white border border-gray-300 rounded-lg p-4 mt-2"
					placeholder="กรอกรหัสผ่าน"
					secureTextEntry
				/>
			</View>

			<TouchableOpacity
				onPress={handleSignIn}
				className="w-full bg-sky-600 py-4 rounded-lg mt-4"
			>
				<Text className="text-white font-psemibold text-lg text-center">
					ลงชื่อเข้าใช้
				</Text>
			</TouchableOpacity>

			<View className="mt-6 flex-row items-center justify-center">
				<Text className="text-sm font-plight text-center text-gray-500">
					ยังไม่มีบัญชีใช่ไหม?{" "}
				</Text>
				<TouchableOpacity>
					<Text className="text-sky-600 font-pbold">ลงทะเบียน</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default SignIn;
