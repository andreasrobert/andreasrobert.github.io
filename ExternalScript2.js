class GradientAnimation {
    constructor() {
      this.cnv        = document.querySelector(`canvas`);
      this.ctx        = this.cnv.getContext(`2d`);
  
      this.circlesNum = 25;  //20
      this.minRadius  = 500;
      this.maxRadius  = 500;
      this.speed      = .009;
      
      (window.onresize = () => {
        this.setCanvasSize();
        this.createCircles();
      })();
      this.drawAnimation();
  
    }
    setCanvasSize() {
      this.w = this.cnv.width  = innerWidth * devicePixelRatio;
      this.h = this.cnv.height = innerHeight * devicePixelRatio;
      this.ctx.scale(devicePixelRatio, devicePixelRatio)
    }
    createCircles() {
      this.circles = [];
      for (let i = 0 ; i < this.circlesNum ; ++i) {
        this.circles.push(new Circle(this.w, this.h, this.minRadius, this.maxRadius));
      }
    }
    drawCircles() {
      this.circles.forEach(circle => circle.draw(this.ctx, this.speed));
    }
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.w, this.h); 
    }
    drawAnimation() {
      this.clearCanvas();
      this.drawCircles();
      window.requestAnimationFrame(() => this.drawAnimation());
    }
  }
  
  class Circle {
    constructor(w, h, minR, maxR) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.angle  = Math.random() * Math.PI * 2;
      this.radius = Math.random() * (maxR - minR) + minR;
      var a = Math.random() * 250 - 180;
      var b = Math.random() * 250 - 180;
      var a2 = (a + b) / 2;
      this.firstColor  = `hsla(${a > 0 ? a : 360 + a}, 100%, 70%, 0.4)`;  //50% 0.5
      this.firstHalfColor = `hsla(${a2 > 0 ? a2 : 360 + a2}, 100%, 70%, 0.75)`;
      this.secondColor = `hsla(${b > 0 ? b : 360 + b}, 100%, 70%, 0)`;  //75%
    }
    draw(ctx, speed) {
      this.angle += speed;
      const x = this.x + Math.cos(this.angle) * 200;
      const y = this.y + Math.sin(this.angle) * 200;
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, this.radius);
            gradient.addColorStop(0, this.firstColor);
            // gradient.addColorStop(0, this.firstHalfColor);
            gradient.addColorStop(1, this.secondColor);
  
      ctx.globalCompositeOperation = `overlay `; //lighten
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, Math.PI * 2);
      ctx.fill(); 
    }
  }
  
  window.onload = () => {
    new GradientAnimation();
  }