import React from "react";
import ChatHeader from "../Chats/ChatHeader/ChatHeader";
import Search from "../Search/Search";
import ChatItem from "./ChatItem/ChatItem";

import styles from "./ChatBar.module.css";

import getChats from "../../fetches/getChats.fetch";
import getUnreadAmount from "../../fetches/getUnreadAmount.fetch";
import getPersonInfo from "../../fetches/getPersonInfo.fetch";
import { AppContext } from "../../context/context";

function ChatBar() {
	const [{ accountId }] = React.useContext(AppContext);
	const [chats, setChats] = React.useState([]);

	React.useEffect(() => {
		async function getData() {
			getChats(accountId).then((chats) => {
				mapChats(chats);
			});

			async function mapChats(chats) {
				let res = chats.map(async (elem) => {
					let person = await getPersonInfo(elem.personId);
					console.log(elem.personId);
					return {
						...elem,
						unreadMessages: await getUnreadAmount(
							elem.href,
							accountId
						),
						name: person[0].name,
						status: person[0].isOnline === 0 ? "Offline" : "Online",
					};
				});

				setChats(await Promise.all(res));
			}
		}
		getData();
	}, [accountId]);

	return (
		<div className={styles.module}>
			{console.log(chats)}
			<ChatHeader />
			<Search />
			<nav>
				<ul className={styles.list}>
					{chats.map(
						({
							href,
							// icon,
							name,
							status,
							date,
							message,
							unreadMessages,
							// file,
							// photo,
							// video,
							personId,
						}) => (
							<li key={href} className={styles.listItem}>
								<ChatItem
									href={href}
									icon={"/assets/person1.svg"}
									name={name}
									status={status}
									date={date}
									message={message}
									unreadMessages={unreadMessages}
									file={0}
									photo={0}
									video={0}
									personId={personId}
								/>
							</li>
						)
					)}
				</ul>
			</nav>
		</div>
	);
}

export default ChatBar;
