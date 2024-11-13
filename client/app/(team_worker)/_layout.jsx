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
						home: "teamworker_home",
						explore: "teamworker_explore",
						report: "teamworker_report",
						profile: "teamworker_profile",
					}}
				/>
			)}
		>
			<Tabs.Screen
				name="teamworker_home"
				options={{
					title: "Home",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="teamworker_explore"
				options={{
					title: "Explore",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="teamworker_report"
				options={{
					title: "Report",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="teamworker_profile"
				options={{
					title: "Profile",
					headerShown: false,
				}}
			/>
		</Tabs>
	);
};

export default AdminLayout;
