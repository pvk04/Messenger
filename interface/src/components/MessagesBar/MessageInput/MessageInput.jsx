import React from "react";
import SmileyModal from "../../SmileyModal/SmileyModal";
import ButtonsAttachModal from "../../ButtonsAttachModal/ButtonsAttachModal";
import postNewMessage from "../../../fetches/postNewMessage.fetch.js";

import styles from "./MessageInput.module.css";
import { AppContext } from "../../../context/context";

function MessageInput({ newMessage, chatId }) {
	const [{ accountId, personId }, dispatch] = React.useContext(AppContext);
	const [modalSmileyActive, setModalSmileyActive] = React.useState(false);
	const [modalBtnsActive, setModalBtnsActive] = React.useState(false);
	const [messageText, setMessageText] = React.useState("");

	function addMessage() {
		if (messageText.trim().length > 0) {
			const message = {
				chatId,
				messageId: Math.random(),
				senderId: accountId,
				recieverId: personId,
				content: messageText,
				createAt: new Date(),
				isViewed: false,
			};

			postNewMessage(chatId, message);
			setMessageText("");
			newMessage(message);
			dispatch({ type: "ACTION" });
		}
	}

	React.useEffect(() => {
		setMessageText("");
	}, [chatId]);

	return (
		<div className={styles.wrap}>
			<div className={styles.body}>
				<div
					className={styles.btn}
					onMouseEnter={() => setModalBtnsActive(true)}
					onMouseLeave={() => setModalBtnsActive(false)}
				>
					<img src="/assets/plus.svg" alt="" />
					<ButtonsAttachModal
						active={modalBtnsActive}
						setActive={setModalBtnsActive}
					/>
				</div>
				<input
					className={styles.messageInput}
					type="text"
					placeholder="Type a message here"
					value={messageText}
					onChange={(e) => {
						setMessageText(e.target.value);
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") addMessage();
					}}
				/>
				<button
					className={styles.smileBtn}
					onMouseEnter={() => setModalSmileyActive(true)}
					onMouseLeave={() => setModalSmileyActive(false)}
				>
					<img src="/assets/smile-icon.svg" alt="" />
					<SmileyModal
						active={modalSmileyActive}
						setActive={setModalSmileyActive}
					/>
				</button>
				<button className={styles.btn} onClick={addMessage}>
					<img src="/assets/navigation.svg" alt="" />
				</button>
			</div>
		</div>
	);
}

export default MessageInput;
