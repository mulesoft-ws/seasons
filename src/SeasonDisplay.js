import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
	Winter: {
		text: "It's Winter!!!",
		iconName: "sun"
	},
	Summer: {
		text: "It's Summer!!!",
		iconName: "snowflake"
	}
};

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? "Summer" : "Winter";
	} else {
		return lat > 0 ? "Winter" : "Summer";
	}
};

const SeasonDisplay = props => {
	const mySeason = getSeason(props.lat, new Date().getMonth);
	// const text =
	// 	mySeason === "Winter" ? "Holy Shit! It's Chilly!!" : "Hot Hot Hot!!!!";
	// const icon = mySeason === "Winter" ? "snowflake" : "sun";
	const { text, iconName } = seasonConfig[mySeason];

	return (
		<div className={`season-display ${mySeason}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
