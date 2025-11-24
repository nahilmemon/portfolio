// For a whole page background sketch template
// Optional p5 background template
let sketch = (p) => {
  p.setup = function () {
    let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    cnv.position(0, 0);
    cnv.style("z-index", "-1");
    cnv.style("position", "fixed");
  };

  p.draw = function () {
    p.clear();
    // Example background animation:
    p.fill(200, 100, 255, 100);
    p.noStroke();
    p.circle(p.mouseX, p.mouseY, 80);
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

// Uncomment when ready to activate background
// new p5(sketch);

// HTML script tag:
// <script defer src="/assets/js/p5-background.js"></script>