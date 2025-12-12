let br, bg, bb;
let mr, mg, mb, brightness;
let eyes, mouth, fangs, horns, arms, markings;
let onButton, offButton;

function setup() {
	let can = createCanvas(800, 800);
	/* Method of canvas positioning found at this link:
		https://github.com/processing/p5.js/wiki/Positioning-your-canvas */
	can.position((windowWidth - width) / 2, (windowHeight - height) / 2);
	
	background("white");
	noStroke();
	angleMode(DEGREES);

	br = random(0, 256);
	bg = random(0, 256);
	bb = random(0, 256);

	/* Mathematical function to find the brightness of a color from this link:
	 https://learn.microsoft.com/en-us/answers/questions/1497116/how-to-find-if-a-given-color-is-dark-or-light */
	brightness = (0.2126 * br) + (0.7152 * bg) + (0.0722 * bb);
	if (brightness >= 128) {
		mr = (br - 50 < 0) ? 0 : br - 50;
		mg = (bg - 50 < 0) ? 0 : bg - 50;
		mb = (bb - 50 < 0) ? 0 : bb - 50;
	} else {
		mr = (br + 50 > 255) ? 255 : br + 50;
		mg = (bg + 50 > 255) ? 255 : bg + 50;
		mb = (bb + 50 > 255) ? 255 : bb + 50;
	}

	eyes = random([1, 2, 3]);
	mouth = random(["happy", "sad"]);
	fangs = random([true, false]);
	horns = random([true, false]);
	arms = random([0, 2, 4, 6]);
	markings = random(["none", "stripes", "spots"]);

	onButton = "#878787";
	offButton = "#b6b6b6";
}

function draw() {
	background("white");

	fill("black");
	rect(0, 700, 800, 100);
	
	//horns
	if (horns) {
		fill(255, 222, 151);
		circle(400, 205, 175);
		circle(600, 205, 175);

		fill("white");
		circle(435, 200, 150);
		circle(565, 200, 150);
	}
	
	//body base
	fill(br, bg, bb);
	ellipse(500, 425, 400, 500); //body
	ellipse(400, 675, 100, 150); //left leg
	ellipse(600, 675, 100, 150); //right leg
	
	//arms	
	stroke(br, bg, bb);
	strokeWeight(50);
	noFill();

	if (arms >= 6) {
		curve(225, 800, 265, 600, 735, 600, 775, 800);
	}
	if (arms >= 4) {
		curve(225, 800, 225, 450, 775, 450, 775, 800);
	}
	if (arms >= 2) {
		curve(225, 800, 245, 525, 755, 525, 775, 800); //2 arms
	}
	noStroke();

	//markings
	stroke(mr, mg, mb);	
	strokeWeight(10);
	fill(mr, mg, mb);
	if (markings == "stripes") {
		line(425, 200, 575, 200);
		line(388, 225, 612, 225);
		line(364, 250, 636, 250);
		line(347, 275, 653, 275);
		line(334, 300, 666, 300);
		line(324, 325, 676, 325);
		line(316, 350, 684, 350);
		line(310, 375, 690, 375);
		line(307, 400, 693, 400);
		line(306, 425, 694, 425);

		line(307, 450, 693, 450);
		line(310, 475, 690, 475);
		line(316, 500, 684, 500);
		line(324, 525, 676, 525);
		line(334, 550, 666, 550);
		line(347, 575, 653, 575);
		line(364, 600, 636, 600);
		line(388, 625, 612, 625);
		line(425, 650, 575, 650);
	} else if (markings == "spots") {
		circle(575, 300, 100);
		circle(535, 265, 65);

		circle(345, 440, 45);
		circle(365, 455, 50);

		circle(600, 510, 66);
		circle(575, 550, 87);
		circle(555, 505, 44);

		circle(437, 580, 65);
		circle(397, 550, 65);
	}
	noStroke();
	
	//eyes
	if (eyes == 1 || eyes == 3) {
		fill("white");
		circle(500, 225, 75);
		fill("black");
		circle(500 , 225, 25);
	}
	if (eyes == 2 || eyes == 3) {
		fill("white");
		circle(425, 300, 75);
		circle(575, 300, 75);
		fill("black");
		circle(425 , 300, 25);
		circle(575 , 300, 25);
	}

	//mouth
	fill("black");
	if (mouth == "happy") {
		arc(500, 350, 225, 150, 0, 180);	
	} else if (mouth == "sad") {
		arc(500, 415, 225, 150, 180, 0);
	}

	//fangs
	fill("white");
	if (fangs) {
		if (mouth == "happy") {
			triangle(425, 350, 455, 350, 440, 380);
			triangle(575, 350, 545, 350, 560, 380);	
		} else if (mouth == "sad"){
			triangle(425, 358, 455, 345, 440, 380);
			triangle(575, 358, 545, 345, 560, 380);
		}
	}
	
	//option menu header
	textFont("Courier");
	textSize(25);
	textAlign(LEFT, BOTTOM);
	fill("black");
	textStyle(BOLDITALIC);
	text("Features:", 5, 30);

	//eyes options
	textSize(20);
	textStyle(BOLD);
	text("Eyes:", 15, 55);

	if (eyes == 1) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 60, 75, 15);
	if (eyes == 2) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 80, 80, 15);
	if (eyes == 3) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 100, 100, 15);
	
	fill("black");
	textStyle(NORMAL);
	textSize(15);
	text("one eye", 30, 75);
	text("two eyes", 30, 95);
	text("three eyes", 30, 115);

	//mouth options
	textSize(20);
	textStyle(BOLD);
	text("Mouth:", 15, 140);

	if (mouth == "happy") {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 145, 55, 15);
	if (mouth == "sad") {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 165, 40, 15);

	fill("black");
	textStyle(NORMAL);
	textSize(15);
	text("happy", 30, 160);
	text("sad", 30, 180);

	//fang options
	textSize(20);
	textStyle(BOLD);
	text("Fangs:", 15, 205);

	if (fangs == true) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 210, 40, 15);
	if (fangs == false) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 230, 30, 15);

	fill("black");
	textStyle(NORMAL);
	textSize(15);
	text("yes", 30, 225);
	text("no", 30, 245);

	//horn options
	textSize(20);
	textStyle(BOLD);
	text("Horns:", 15, 270);

	if (horns == true) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 275, 40, 15);
	if (horns == false) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 295, 30, 15);

	fill("black");
	textStyle(NORMAL);
	textSize(15);
	text("yes", 30, 290);
	text("no", 30, 310);
	
	//arm options
	textSize(20);
	textStyle(BOLD);
	text("Arms:", 15, 335);

	if (arms == 0) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 340, 90, 15);
	if (arms == 2) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 360, 80, 15);
	if (arms == 4) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 380, 90, 15);
	if (arms == 6) {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 400, 80, 15);

	fill("black");
	textStyle(NORMAL);
	textSize(15);
	text("zero arms", 30, 355);
	text("two arms", 30, 375);
	text("four arms", 30, 395);
	text("six arms", 30, 415);

	//markings options
	textSize(20);
	textStyle(BOLD);
	text("Markings:", 15, 440);

	if (markings == "none") {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 445, 45, 15);
	if (markings == "stripes") {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 465, 70, 15);
	if (markings == "spots") {
		fill(onButton);
	} else {
		fill(offButton);
	}
	rect(25, 485, 55, 15);

	fill("black");
	textStyle(NORMAL);
	textSize(15);
	text("none", 30, 460);
	text("stripes", 30, 480);
	text("spots", 30, 500);
	
	//color change and random button
	fill(offButton);
	square(0, 700, 100);
	square(700, 700, 100);
	fill("black");
	textAlign(CENTER, CENTER);
	textSize(25);
	textStyle(NORMAL);
	text("Change\nColor", 50, 750);
	text("Random", 750, 750);
}

function mousePressed() {
	//color change button
	if (mouseX >= 0 && mouseX <= 100) { //check x value in proper range
		if (mouseY >= 700 && mouseY <= 800) { //check y in proper range
			br = random(0, 256);
			bg = random(0, 256);
			bb = random(0, 256);
		
			brightness = (0.2126 * br) + (0.7152 * bg) + (0.0722 * bb);

			if (brightness >= 128) {
				mr = (br - 50 < 0) ? 0 : br - 50;
				mg = (bg - 50 < 0) ? 0 : bg - 50;
				mb = (bb - 50 < 0) ? 0 : bb - 50;
				// text("light", 700, 100)
			} else {
				mr = (br + 50 > 255) ? 255 : br + 50;
				mg = (bg + 50 > 255) ? 255 : bg + 50;
				mb = (bb + 50 > 255) ? 255 : bb + 50;
				// text("dark", 700, 100)
			}
		}
	}

	//random button
	if (mouseX >= 700 && mouseX <= 800) { //check x value in proper range
		if (mouseY >= 700 && mouseY <= 800) { //check y in proper range
			br = random(0, 256);
			bg = random(0, 256);
			bb = random(0, 256);
		
			brightness = (0.2126 * br) + (0.7152 * bg) + (0.0722 * bb);

			if (brightness >= 128) {
				mr = (br - 50 < 0) ? 0 : br - 50;
				mg = (bg - 50 < 0) ? 0 : bg - 50;
				mb = (bb - 50 < 0) ? 0 : bb - 50;
				// text("light", 700, 100)
			} else {
				mr = (br + 50 > 255) ? 255 : br + 50;
				mg = (bg + 50 > 255) ? 255 : bg + 50;
				mb = (bb + 50 > 255) ? 255 : bb + 50;
				// text("dark", 700, 100)
			}

			eyes = random([1, 2, 3]);
			mouth = random(["happy", "sad"]);
			fangs = random([true, false]);
			horns = random([true, false]);
			arms = random([0, 2, 4, 6]);
			markings = random(["none", "stripes", "spots"]);
		}
	}
	
	//number of eyes change
	if (mouseX >= 25 && mouseX <= 125) { //check if x in proper range
		if (mouseY >= 60 && mouseY <= 75) { //check if y in proper range
			eyes = 1;
		} else if (mouseY >= 80 && mouseY <= 95) { //check if y in proper range
			eyes = 2;
		} else if (mouseY >= 100 && mouseY <= 115) { //check if y in proper range
			eyes = 3;
		}
	}

	//mouth shape
	if (mouseX >= 25 && mouseX <= 80) { //check if x in proper range
		if (mouseY >= 145 && mouseY <= 160) { //check if y in proper range
			mouth = "happy";
		} else if (mouseY >= 165 && mouseY <= 180) { //check if y in proper range
			mouth = "sad";
		}
	}

	//fangs
	if (mouseX >= 25 && mouseX <= 65) { //check if x in proper range
		if (mouseY >= 210 && mouseY <= 225) { //check if y in proper range
			fangs = true;
		} else if (mouseY >= 230 && mouseY <= 245) { //check if y in proper range
			fangs = false;
		}
	}

	//horns
	if (mouseX >= 25 && mouseX <= 65) { //check if x in proper range
		if (mouseY >= 275 && mouseY <= 290) { //check if y in proper range
			horns = true;
		} else if (mouseY >= 295 && mouseY <= 310) { //check if y in proper range
			horns = false;
		}
	}

	//arms
	if (mouseX >= 25 && mouseX <= 115) { //check if x in proper range
		if (mouseY >= 340 && mouseY <= 355) { //check if y in proper range
			arms = 0;
		} else if (mouseY >= 360 && mouseY <= 375) { //check if y in proper range
			arms = 2;
		} else if (mouseY >= 380 && mouseY <= 395) { //check if y in proper range
			arms = 4;
		} else if (mouseY >= 400 && mouseY <= 415) {
			arms = 6;
		}
	}

	//markings
	if (mouseX >= 25 && mouseX <= 95) { //check if x in proper range
		if (mouseY >= 445 && mouseY <= 460) { //check if y in proper range
			markings = "none";
		} else if (mouseY >= 465 && mouseY <= 480) { //check if y in proper range
			markings = "stripes";
		} else if (mouseY >= 485 && mouseY <= 500) { //check if y in proper range
			markings = "spots";
		}
	}
}
