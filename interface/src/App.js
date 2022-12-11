import React from "react";
import AsideBar from "./components/AsideBar";
import Chats from "./components/Chats";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import HomePage from "./components/HomePage";
import ContactsPage from "./components/ContactsPage/ContactsPage";
import NotificationsPage from "./components/NotificationsPage";
import CalendarPage from "./components/CalendarPage";
import SettingsPage from "./components/SettingsPage";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<AsideBar className="sidebar" />
			<Routes>
				<Route path="/chats/*" element={<Chats />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/contacts" element={<ContactsPage />} />
				<Route path="/notifications" element={<NotificationsPage />} />
				<Route path="/calendar" element={<CalendarPage />} />
				<Route path="/settings" element={<SettingsPage />} />
			</Routes>
		</div>
	);
}

export default App;
