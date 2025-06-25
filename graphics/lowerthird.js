import { gsap } from "../node_modules/gsap/index.js";

const nameplateEl = document.getElementById("nameplate");
const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");

nodecg.listenFor("showLowerthird", (newVal) => {
	titleEl.innerHTML = newVal.title;
	subtitleEl.innerHTML = newVal.subtitle;

	const tl = gsap.timeline();

	tl.from([nameplateEl, titleEl, subtitleEl], 1, { width: 0 });

	tl.to([nameplateEl, titleEl, subtitleEl], 1, { width: 0 }, "+=4");

	tl.call(() => {
		titleEl.innerHTML = "";
		subtitleEl.innerHTML = "";
	});

	tl.set([nameplateEl, titleEl, subtitleEl], { width: "" });
});
