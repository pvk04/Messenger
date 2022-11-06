import React from "react";
import BarHeader from "./BarHeader/BarHeader";
import MessageInput from "./MessageInput/MessageInput";
import MessageArea from "./MessageArea/MessageArea";
import { useParams } from "react-router-dom";

import styles from "./MessagesBar.module.css";

const messagesFromServer = [
	{
		chatId: "test",
		messageId: 0,
		senderId: 0,
		content: "testestestestest",
		createAt: "03.10.2021 10:00",
		isViewed: true,
	},
	{
		chatId: "test",
		messageId: 1,
		senderId: 1,
		content: "ok",
		createAt: "03.05.2022 10:02",
		isViewed: true,
	},
	{
		chatId: "test",
		messageId: 2,
		senderId: 0,
		content: "mamapapa",
		createAt: "11.05.2022 10:02",
		isViewed: false,
	},
	{
		chatId: "test1",
		messageId: 0,
		senderId: 0,
		content: "test",
		createAt: "03.10.2022 10:02",
		isViewed: false,
	},
];

function MessagesBar() {
	const { id } = useParams();
	const [messages, setMessages] = React.useState([]);
	const [currentChatMsgs, setCurrentChatMsgs] = React.useState([]);

	React.useEffect(() => {
		function filterMessages() {
			const res = [];
			for (let message of messages) {
				if (message.chatId === id) {
					res.push(message);
				}
			}
			setCurrentChatMsgs(res);
		}
		filterMessages();

        return () => setCurrentChatMsgs([]);
	}, [id, messages]);

	React.useEffect(() => {
		function getMessages() {
			setMessages(messagesFromServer);
		}
		getMessages();
	}, []);

	return (
		<div className={styles.module}>
			<BarHeader />
			<MessageArea messages={currentChatMsgs} chatId={id} />
			<MessageInput
				messages={currentChatMsgs}
				newMessage={(message) => {
					setMessages([...messages, message]);
				}}
				chatId={id}
			/>
		</div>
	);
}

export default MessagesBar;
