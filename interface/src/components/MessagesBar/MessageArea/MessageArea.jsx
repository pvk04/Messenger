import React from "react";
import { AppContext } from "../../../context/context";
import formatDate from "../../../utils/formatDate.util";

import styles from "./MessageArea.module.css";

function MessageArea({ messages }) {
	const [{ accountId }] = React.useContext(AppContext);

	return (
		<div className={styles.wrap}>
			<ul className={styles.list}>
				{messages.map(
					({ messageId, senderId, content, createAt, isViewed }) => {
						let isMyMes = true;
						if (senderId !== accountId) isMyMes = false;
						return (
							<li
								key={messageId}
								className={
									isMyMes
										? styles.container
										: `${styles.container} ${styles.other_container}`
								}
							>
								<div
									className={
										isMyMes
											? `${styles.content_wrap} ${
													styles.more_my
											  } ${
													isViewed
														? styles.viewed
														: styles.notViewed
											  }`
											: `${styles.content_wrap} ${styles.more_other}`
									}
								>
									<div
										className={
											isMyMes
												? `${styles.content} ${styles.my}`
												: `${styles.content} ${styles.other}`
										}
									>
										<p className={styles.content_body}>
											{content}
										</p>
									</div>
								</div>
								<span
									className={
										isMyMes
											? styles.date_msg
											: `${styles.date_msg} ${styles.other_date}`
									}
								>
									{formatDate(createAt)}
								</span>
							</li>
						);
					}
				)}
			</ul>
		</div>
	);
}

export default MessageArea;
