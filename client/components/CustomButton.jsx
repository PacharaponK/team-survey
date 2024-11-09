import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
	title,
	handlePress,
	containerStyles = "",
	textStyles = "",
	isLoading = false,
}) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={` rounded-full min-h-[62px] justify-center items-center px-10 mt-5 ${
				isLoading ? "opacity-50" : ""
			} ${containerStyles}`}
			disabled={isLoading}
		>
			<Text className={` font-pbold text-lg ${textStyles}`}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
