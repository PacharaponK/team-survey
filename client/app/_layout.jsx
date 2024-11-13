import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { ContextProvider } from "../contexts/Auth.context";

export default function RootLayout() {
	const [fontsLoaded, error] = useFonts({
		"Prompt-Black": require("../assets/fonts/Prompt-Black.ttf"),
		"Prompt-Bold": require("../assets/fonts/Prompt-Bold.ttf"),
		"Prompt-ExtraBold": require("../assets/fonts/Prompt-ExtraBold.ttf"),
		"Prompt-ExtraLight": require("../assets/fonts/Prompt-ExtraLight.ttf"),
		"Prompt-Light": require("../assets/fonts/Prompt-Light.ttf"),
		"Prompt-Medium": require("../assets/fonts/Prompt-Medium.ttf"),
		"Prompt-Regular": require("../assets/fonts/Prompt-Regular.ttf"),
		"Prompt-SemiBold": require("../assets/fonts/Prompt-SemiBold.ttf"),
		"Prompt-Thin": require("../assets/fonts/Prompt-Thin.ttf"),
	});

	useEffect(() => {
		if (error) throw error;

		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, error]);

	if (!fontsLoaded && !error) {
		return null;
	}
	return (
		<ContextProvider>
			<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />
				<Stack.Screen name="(admin)" options={{ headerShown: false }} />
				<Stack.Screen name="(team_leader)" options={{ headerShown: false }} />
				<Stack.Screen name="(team_worker)" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)" options={{ headerShown: false }} />
			</Stack>
		</ContextProvider>
	);
}
