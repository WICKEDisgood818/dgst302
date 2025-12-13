let speed = 2;
let xspeed = speed;
let yspeed = speed;
let x = 150;
let y = 20;
let offset = 16;
let score = 0;

function setup() {
  let can = createCanvas(800, 800);
	/* Method of canvas positioning found at this link:
		https://github.com/processing/p5.js/wiki/Positioning-your-canvas */
	can.position((windowWidth - width) / 2, (windowHeight - height) / 2);
	
	background("#84e258");
	cursor("../images/fire.png");
}

function draw() {
	background("#84e258");
	
	rectMode(CORNER)
	fill("#595959");
	noStroke();
	rect(100, 0, 100, 800);
	rect(0, 350, 800, 100);
	rect(500, 0, 100, 800);
	rect(0, 670, 800, 100);
	rect(0, 145, 800, 100);

	/* check the position of the mouse and 
	 edit the speed variables accordingly */
	if (mouseX > x) {
		xspeed = speed;
	} else {
		xspeed = -speed;
	}
	if (mouseY > y) {
		yspeed = speed;
	} else {
		yspeed = -speed;
	}

	let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);
	if (d <= offset) {
		x = 150;
		y = 20;
		score++;
	}

	if ((y >= 350 && y <= 450) || (y >= 670 && y <= 770) || (y >= 145 && y <= 245)) {
		x += xspeed;
	}
	if ((x >= 100 && x <= 200) || (x >= 500 && x <= 600)) {
		y += yspeed;
	}
		
	textAlign(CENTER, CENTER);
	fill("black");
	textSize(25);
	text("Fires Extinguished: " + score, 350,785);
	
	textSize(32);
	text("🚒", x, y);
}
