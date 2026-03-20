// Reveal elements on scroll
// eslint-disable-next-line
import { gsap } from "gsap";
// eslint-disable-next-line
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const workspaceAnimInit = () => {
	const workspaces = document.querySelectorAll(".workspace");

	if (workspaces.length > 0) {
		[...workspaces].forEach((workspace) => {
			const mm = gsap.matchMedia();
			const workspaceInner = workspace.querySelector(".workspace__inner");
			const workspaceWrapper = workspace.querySelector(".workspace__wrapper");
			const workspaceText = gsap.utils.toArray(".workspace-content__text");
			const workspaceInfo = workspace.querySelector(".workspace-content__info");
			const workspaceAction = workspace.querySelector(
				".workspace-content__action",
			);

			gsap.set(workspaceWrapper, {
				webkitMaskSize: "15% 25%",
			});

			mm.add("(max-width: 768px)", () => {
				gsap.set(workspaceWrapper, {
					webkitMaskSize: "50% 65%",
				});
			});

			gsap.set(workspaceText, {
				opacity: 0,
				y: 30,
			});

			gsap.set([workspaceInfo, workspaceAction], {
				opacity: 0,
				y: 40,
			});

			const workspaceAnimation = gsap.timeline();

			workspaceAnimation.to(workspaceWrapper, {
				maskSize: "170%",
				duration: 2,
				ease: "power1.in",
			});

			workspaceAnimation.to(workspaceText, {
				opacity: 1,
				y: 0,
			});

			workspaceAnimation.to([workspaceInfo, workspaceAction], {
				opacity: 1,
				y: 0,
			});

			ScrollTrigger.create({
				animation: workspaceAnimation,
				trigger: workspaceInner,
				start: "-8% top",
				end: "+=150%",
				scrub: 1,
				pin: true,
				invalidateOnRefresh: true,
				pinSpacing: true,
				pinType: "transform",
				anticipatePin: 1,
			});
		});
	}
};

export default workspaceAnimInit;
