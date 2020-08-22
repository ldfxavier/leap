import React from "react";

import "react-awesome-slider/dist/styles.css";

import { Container } from "./styles";

import withAutoplay from "react-awesome-slider/dist/autoplay";

import banner from "~/assets/banner/banner_animação_3D_WALK.jpg";

const AutoplaySlider = withAutoplay(Container);

const Banner = () => {
	return (
		<AutoplaySlider
			play={true}
			cancelOnInteraction={false}
			interval={6000}
			bullets={false}
		>
			<div data-src={banner} />
			{/* <div data-src="https://cdn.hipwallpaper.com/i/46/84/tvOWCd.jpg" />
			<div data-src="https://images.hdqwalls.com/wallpapers/new-york-buildings-city-night-minimalism-4e.jpg" /> */}
		</AutoplaySlider>
	);
};

export default Banner;
