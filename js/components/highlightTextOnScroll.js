// eslint-disable-next-line
import SplitType from "split-type";

// eslint-disable-next-line
import { gsap } from "gsap";

// eslint-disable-next-line
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlightTextOnScroll = () => {
	const highlightedText = document.querySelectorAll(".js-highlight-on-scroll");

	if (highlightedText.length > 0) {
		[...highlightedText].forEach((text) => {
			const textSplitted = new SplitType(text, { types: "lines" });

			const animationLines = () => {
				textSplitted.revert();
				textSplitted.split();

				textSplitted.lines.forEach((line) => {
					gsap.to(line, {
						backgroundPosition: "0% 0",
						ease: "none",
						scrollTrigger: {
							trigger: line,
							start: "top bottom",
							end: "center center",
							scrub: 1.5,
							toggleActions: "play reverse play reverse",
						},
					});
				});
			};

			window.addEventListener("load", () => {
				animationLines();
			});

			window.addEventListener("resize", () => {
				animationLines();
			});
		});
	}
};

export default highlightTextOnScroll;
