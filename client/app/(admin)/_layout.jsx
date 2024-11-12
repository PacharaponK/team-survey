import React from "react";
import { Tabs } from "expo-router";
import TabBar from "../../components/TabBar";

const AdminLayout = () => {
	return (
		<Tabs tabBar={(props) => <TabBar {...props} />}>
			<Tabs.Screen
				name="admin_home"
				options={{
					title: "Home",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="admin_explore"
				options={{
					title: "Explore",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="admin_report"
				options={{
					title: "Report",
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name="admin_profile"
				options={{
					title: "Profile",
					headerShown: false,
				}}
			/>
		</Tabs>
	);
};

export default AdminLayout;
