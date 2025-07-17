const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const pointsDisplay = document.getElementById("points");
const Result = document.getElementById("result");
const Spinning = document.getElementById("Spinning");

const segments = [10, 20, 30, 50, 70, 80, 90, 100];

let currentRotation = 0;
var workChecker = true;
// color generator start
const childrenArray = Array.from(wheel.children);
function generateBrightColor() {
	const hue = Math.floor(Math.random() * 360);
	const saturation = 100;
	const lightness = 70;
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
// color generator end
// styles for all children start
childrenArray.map((chi, index) => {
	chi.style.transform = `rotate(${
		index * (360 / childrenArray.length) + 47
	}deg)`;
	chi.style.background = `linear-gradient(45deg, ${generateBrightColor()}, #e57373)`;
});
// styles for all children end

spinBtn.addEventListener("click", () => {
	if (workChecker == true) {
		workChecker = false;
		Result.style.display = "none";
		Spinning.style.display = "block";
		const randomIndex = Math.floor(Math.random() * segments.length);
		const degreesPerSegment = 360 / segments.length;
		const randomDegree = 3600 + randomIndex * degreesPerSegment;
		currentRotation = randomDegree;

		if (-randomIndex * 60 * 100 <= -120) {
			wheel.style.transform = `rotate(${-randomIndex * 60 * 100}deg)`;
		} else {
			wheel.style.transform = `rotate(${currentRotation / 2}deg)`;
		}

		setTimeout(() => {
			wheel.style.transform = `rotate(${
				-randomIndex * (360 / childrenArray.length)
			}deg)`;
		}, 1000);
		setTimeout(() => {
			pointsDisplay.textContent = segments[randomIndex];
			Result.style.display = "block";
			Spinning.style.display = "none";
			workChecker = true;
		}, 3800); // match CSS transition duration
	}
});
