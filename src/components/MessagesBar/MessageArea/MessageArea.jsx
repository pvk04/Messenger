import React from "react";

// import styles from "./MessageArea.module.css";

function MessageArea({ messages }) {

	function formatDate(date) {
		const now = new Date();
		date = new Date(date);
		const diffMin = Math.round((now.getTime() - date.getTime()) / 60000);
		switch (true) {
			case diffMin < 1:
				return `now`;
			case diffMin < 60:
				return `${diffMin} minutes ago`;
			case diffMin / 1440 < 1:
				return `${Math.round(diffMin / 60)} hours ago`;
			case diffMin / 10080 < 1:
				return `${Math.round(diffMin / 1440)} days ago`;
			case diffMin / 43800 < 1:
				return `${Math.round(diffMin / 10080)} weeks ago`;
			case diffMin / 525600 < 1:
				return `${Math.round(diffMin / 43800)} month ago`;
			default:
				return `${Math.round(diffMin / 525600)} years ago`;
		}
	}

	return (
		<div>
			<ul>
				{messages.map(
					({ messageId, senderId, content, createAt, isViewed }) => {
						return (
							<li key={messageId}>
								<div>
									<p>{content}</p>
									<span>{formatDate(createAt)}</span>
								</div>
							</li>
						);
					}
				)}
			</ul>
		</div>
	);
}

export default MessageArea;
