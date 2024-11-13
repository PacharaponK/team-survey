import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../../components/TabBar";

const AdminLayout = () => {
	return (
		<Tabs
			tabBar={(props) => (
				<TabBar
					{...props}
					tabNames={{
						home: "teamleader_home",
						explore: "teamleader_explore",
						report: "teamleader_report",
						profile: "teamleader_profile",
					}}
				/>
			)}
		>
			<Tabs.Screen
				name="teamleader_home"
				options={{
					title: "Home",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="teamleader_explore"
				options={{
					title: "Explore",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="teamleader_report"
				options={{
					title: "Report",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="teamleader_profile"
				options={{
					title: "Profile",
					headerShown: false,
				}}
			/>
		</Tabs>
	);
};

export default AdminLayout;
