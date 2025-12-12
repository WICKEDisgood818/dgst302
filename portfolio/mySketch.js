const diameter = 75;
const spacing = 85;  // distance between centers 
const gridWidth = 8; // grid width
let purples = ["#420a5e", "#55236e", "#683b7e", "#7b548e", 
							"#8e6c9e", "#a185af"];
let blues = ["#1f196e", "#1c1763", "#35307d", "#4c478b", 
						 "#625e9a", "#191458"]
let bg = "#000000";

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(bg); // black background
	noLoop(); // no animation for now
}

function draw() {
	// shift the drawing plane to position 0,0 at the center 
	translate(width / 2, height / 2);

	for (let y = 0; y < gridWidth; y++){
		let colorChoice = random();
		for (let x = 0; x < gridWidth; x++){
			let circle_x = x * spacing - (spacing * (gridWidth - 1)) / 2;
			let circle_y = y * spacing - (spacing * (gridWidth - 1)) / 2;
			
			if (colorChoice <= 0.5) {
				stroke(random(purples));
				fill(random(purples));
			} else {
				stroke(random(blues));
				fill(random(blues));
			}
			
			strokeWeight(random(2, 25));
			
			circle(circle_x,circle_y,diameter);
		}
	}
}

function mouseClicked() {
	setup();
	draw();
}