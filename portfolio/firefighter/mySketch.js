function setup() {
  let can = createCanvas(800, 800);
	/* Method of canvas positioning found at this link:
		https://github.com/processing/p5.js/wiki/Positioning-your-canvas */
	can.position((windowWidth - width) / 2, (windowHeight - height) / 2);
	
	background("#84e258");
	cursor("images/fire");
}

function draw() {
	fill("#595959");
	rect(100, 0, 100, 800);
}
