import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Button,
	Touchable,
	TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { listTeam } from "../../conf/api";
import useAx from "../../conf/useAx";

const CreateTeam = () => {
	const [teamName, setTeamName] = useState("");
	const [leader, setLeader] = useState(null);
	const [open, setOpen] = useState(false);
	const teamList = useAx(listTeam);
	console.log(teamList.data);

	const handleSubmit = () => {};

	return (
		<View className="bg-blue-500 flex-1 pt-4">
			{/* Header Section */}
			<View className="px-6 items-start mb-4"></View>

			{/* Team Name Input */}
			<View className="px-4 mb-6">
				<Text className="text-lg font-pmedium text-white mb-2">ชื่อทีม :</Text>
				<TextInput
					className="w-full p-3 font-pregular bg-white border border-gray-300 rounded-xl text-lg text-gray-600"
					placeholder="กรุณาใส่ชื่อ....."
					value={teamName}
					onChangeText={(text) => setTeamName(text)}
				/>
			</View>

			{/* Team Leader Dropdown */}
			<View className="px-4 mb-6">
				<Text className="text-lg font-pmedium text-white mb-2">
					เลือก Leader :
				</Text>
				<DropDownPicker
					open={open}
					value={leader}
					items={[
						{ label: "Leader 1", value: "leader1" },
						{ label: "Leader 2", value: "leader2" },
						{ label: "Leader 3", value: "leader3" },
					]}
					setOpen={setOpen}
					setValue={setLeader}
					placeholder="Select Leader"
					containerStyle={{
						width: "100%",
						height: 50,
						borderColor: "#ccc",
						borderWidth: 1,
						borderRadius: 10,
					}}
					style={{
						backgroundColor: "#fff",
						borderWidth: 1,
						borderColor: "#ccc",
						borderRadius: 10,
					}}
					dropDownStyle={{
						backgroundColor: "#fff",
						borderRadius: 10,
					}}
				/>
			</View>

			{/* Submit Button */}
			<View className="px-4 mb-4 mt-2">
				<TouchableOpacity
					className="items-center justify-center h-16 w-full bg-white rounded-xl shadow-lg"
					onPress={() => console.log("Create Team Pressed")}
				>
					<Text className="font-psemibold text-xl text-black">สร้างทีม</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CreateTeam;
