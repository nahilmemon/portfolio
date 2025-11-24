let sketch = (p) => {
  let container;

  p.setup = function() {
    container = document.getElementById("headerSketch");
    let cnv = p.createCanvas(container.offsetWidth, container.offsetHeight);
    cnv.parent("headerSketch");
    cnv.style("position", "absolute");
    cnv.style("top", "0");
    cnv.style("left", "0");
    cnv.style("z-index", "-1");
  };

  p.draw = function() {
    p.clear();
    // your animation here
  };

  p.windowResized = function() {
    p.resizeCanvas(container.offsetWidth, container.offsetHeight);
  };
};

// new p5(sketch);

// HTML script tag:
// <script defer src="/assets/js/p5-background.js"></script>

// HTML header template:
/*
<header id="headerSketch" class="relative h-64 sm:h-80">
  <div class="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 max-w-6xl mx-auto">
    <h1 class="text-5xl font-bold">Hello</h1>
  </div>
</header>
*/