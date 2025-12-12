const diameter = 75;
const spacing = 85;  // distance between centers 
const gridWidth = 8; // grid width
let r, g, b;
let colors = [];
let bg = "#000000";

function setup() {
	colors = []
	
	createCanvas(windowWidth, windowHeight);
	background(bg); // black background
	noLoop(); // no animation for now

	r = random(0, 256);
	g = random(0, 256);
	b = random(0, 256);
	colors.push([r, g, b]);

	for (let i = 0; i < 4; i++) {
		if (r + 15 < 256) {
			r += 15;
		} else {
			r = 255;
		}
		if (g + 15 < 256) {
			g += 15;
		} else {
			g = 255;
		}
		if (b + 15 < 256) {
			b += 15;
		} else {
			b = 255;
		}
		colors.push([r, g, b]);
	}
}

function draw() {
	// shift the drawing plane to position 0,0 at the center 
	translate(width / 2, height / 2);

	for (let y = 0; y < gridWidth; y++){
		for (let x = 0; x < gridWidth; x++){
			let circle_x = x * spacing - (spacing * (gridWidth - 1)) / 2;
			let circle_y = y * spacing - (spacing * (gridWidth - 1)) / 2;
			
			stroke(random(colors));
			fill(random(colors));
			
			strokeWeight(random(2, 25));
			
			circle(circle_x,circle_y,diameter);
		}
	}
}

function mouseClicked() {
	setup();
	draw();
}
