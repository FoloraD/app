import React from "react";
import { Chrono } from "react-chrono";

export const TimelineCard = () => {
	const items = [
		{
			title: "May 1940",
			cardTitle: "Dunkirk",
			url: "http://www.history.com",
			cardSubtitle:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			cardDetailedText:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			media: {
				type: "IMAGE",
				source: {
					url: "../assets/maggie.png",
				},
			},
		},
		{
			title: "May 1940",
			cardTitle: "Dunkirk",
			url: "http://www.history.com",
			cardSubtitle:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			cardDetailedText:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			media: {
				type: "IMAGE",
				source: {
					url: "../assets/maggie.png",
				},
			},
		},
		{
			title: "May 1940",
			cardTitle: "Dunkirk",
			url: "http://www.history.com",
			cardSubtitle:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			cardDetailedText:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			media: {
				type: "IMAGE",
				source: {
					url: "../assets/maggie.png",
				},
			},
		},
		{
			title: "May 1940",
			cardTitle: "Dunkirk",
			url: "http://www.history.com",
			cardSubtitle:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			cardDetailedText:
				"Men of the British Expeditionary Force (BEF) wade out to..",
			media: {
				type: "IMAGE",
				source: {
					url: "../assets/maggie.png",
				},
			},
		},
	];

	return (
		<div id='timetile'>
			<Chrono items={items} mode='VERTICAL_ALTERNATING' />
		</div>
	);
};
