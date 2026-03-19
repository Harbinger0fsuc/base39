// Reveal elements on scroll
// eslint-disable-next-line
import SplitType from "split-type";
// eslint-disable-next-line
import { gsap } from "gsap";
// eslint-disable-next-line
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initRevealTextElems = () => {
	const revealTextElems = document.querySelectorAll(".js-reveal-text");

	if (revealTextElems.length > 0) {
		Array.from(revealTextElems).forEach((elem) => {
			const text = new SplitType(elem, { types: "lines" });
			const revealTextElemsTimeline = gsap.timeline();
			const translateY = +elem.dataset.translateY ?? 0;
			const stagger = +elem.dataset.stagger ?? 0;
			const duration = +elem.dataset.duration ?? 0.4;

			window.addEventListener("load", () => {
				text.revert();
				text.split();

				const allLines = elem.querySelectorAll(".line");
				revealTextElemsTimeline.from(allLines, {
					opacity: 0,
					y: translateY,
					stagger,
					duration,
				});

				ScrollTrigger.create({
					animation: revealTextElemsTimeline,
					trigger: elem,
					toggleActions: "play pause resume pause",
				});
			});
		});
	}
};

export default initRevealTextElems;
