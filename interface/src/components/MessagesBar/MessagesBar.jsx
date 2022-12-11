import React from "react";
import BarHeader from "./BarHeader/BarHeader";
import MessageInput from "./MessageInput/MessageInput";
import MessageArea from "./MessageArea/MessageArea";
import getChatMessages from "../../fetches/getChatMessages.fetch";
import { useParams } from "react-router-dom";

import styles from "./MessagesBar.module.css";

function MessagesBar() {
	const { id } = useParams();
	const [messages, setMessages] = React.useState([]);

	React.useEffect(() => {
		async function getMessages() {
			let msgs = await getChatMessages(id);
			setMessages(msgs);
		}
		getMessages();
	}, [id]);

	return (
		<div className={styles.module}>
			<BarHeader />
			<MessageArea messages={messages} />
			<MessageInput
				messages={messages}
				newMessage={(message) => {
					setMessages([...messages, message]);
				}}
				chatId={id}
			/>
		</div>
	);
}

export default MessagesBar;
