import React from "react";
import { AppContext } from "../../../context/context";
import getPersonInfo from "../../../fetches/getPersonInfo.fetch";

import styles from "./BarHeader.module.css";

function BarHeader() {
	const [{ personId }] = React.useContext(AppContext);
	const [person, setPerson] = React.useState([{ name: "", isOnline: 0 }]);

	React.useEffect(() => {
		async function getInfo() {
			const personInfo = await getPersonInfo(personId);
			if (personInfo.length !== 0) {
				setPerson(personInfo[0]);
			}
		}
		getInfo();
	}, [personId]);

	return (
		<div className={styles.wrap}>
			<div className={styles.head}>
				<img src={"/assets/person1.svg"} alt="" />
				<div className={styles.infoBlock}>
					<div className={styles.info}>
						<h1>{person.name}</h1>
						<p>{person.isOnline === 0 ? "Offline" : "Online"}</p>
					</div>
					<div className={styles.headBtns}>
						<button>
							<img src="/assets/attach.svg" alt="" />
						</button>
						<button>
							<img src="/assets/more-vertical.svg" alt="" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BarHeader;
