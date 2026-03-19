// eslint-disable-next-line
import { gsap } from "gsap";

// eslint-disable-next-line
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

// eslint-disable-next-line
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);

const audienceAnimInit = () => {
	const audiences = document.querySelectorAll(".audience");

	if (audiences.length > 0) {
		[...audiences].forEach((audience) => {
			const title = audience.querySelector(".audience__title");
			const number = audience.querySelector(".audience__number");
			const info = audience.querySelector(".audience__info");
			const shape1 = audience.querySelector(".audience__shape--1");
			const shape2 = audience.querySelector(".audience__shape--2");
			const shape3 = audience.querySelector(".audience__shape--3");

			const audienceAnimation = gsap.timeline();

			audienceAnimation.from([title, number, info], {
				y: 70,
				opacity: 0,
				stagger: 0.2,
			});

			audienceAnimation.to(shape1, {
				xPercent: 100,
				rotate: 45,
			});

			audienceAnimation.to(
				shape3,
				{
					xPercent: -100,
					rotate: -45,
				},
				"<",
			);

			audienceAnimation.to([shape2, shape3], {
				opacity: 0,
			});

			audienceAnimation.to(
				audience,
				{
					backgroundColor: "#A9472C",
				},
				"<",
			);

			audienceAnimation.to(
				number,
				{
					innerHTML: "2",
					snap: {
						innerHTML: 1,
					},
				},
				"<",
			);

			audienceAnimation.to(shape1, {
				rotate: 0,
			});

			audienceAnimation.to(
				"#square-itself",
				{
					// Update the parent's "window" size/position
					attr: { viewBox: "0 0 175 288" },
					duration: 1.5,
					ease: "power2.inOut",
				},
				"<",
			);

			audienceAnimation.to(
				"#shape-square",
				{
					morphSVG: {
						shape: "#shape-line",
						origin: "left right",
						type: "rotational",
					},
					ease: "power3.inOut",
					duration: 1.5,
					fill: "#A9472C",
				},
				"<",
			);

			audienceAnimation.to(
				audience,
				{
					backgroundColor: "#E6D2B5",
				},
				"<",
			);

			audienceAnimation.to(
				number,
				{
					innerHTML: "3",
					snap: {
						innerHTML: 1,
					},
				},
				"<",
			);

			audienceAnimation.to(
				[title, number, info],
				{
					color: "#A9472C",
				},
				"<",
			);

			ScrollTrigger.create({
				animation: audienceAnimation,
				trigger: audience,
				start: "top top",
				end: "+=100%",
				scrub: 1,
				pin: true,
				invalidateOnRefresh: true,
				pinSpacing: true,
			});
		});
	}
};

export default audienceAnimInit;
