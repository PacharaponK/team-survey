import { Stack } from "expo-router";
import { ContextProvider } from "../../contexts/Auth.context";

const AuthLayout = () => {
	return (
		<ContextProvider>
			<Stack>
				<Stack.Screen name="sign-in" options={{ headerShown: false }} />
			</Stack>
		</ContextProvider>
	);
};

export default AuthLayout;
