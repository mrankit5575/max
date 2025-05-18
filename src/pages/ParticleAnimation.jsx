 import React, { useRef, useEffect } from "react";

const ParticleAnimation = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: null, y: null, trail: [] });
  const animationFrameId = useRef(null);
  const isMobile = useRef(false);

  // Configuration
  const config = {
    particleCount: 80,
    maxSize: 12,
    minSize: 4,
    baseSpeed: 0.5,
    repulsionRadius: 250,
    connectionRadius: 150,
    // colors: ['rgba(12, 9, 80, 0.8)', 'rgba(0,0,0,0 )'], // #0C0950 with opacity
    shapes: ['circle', 'square', 'triangle'],
    colors: ['rgba(255, 0, 0, 0.8)', '#000000'],

    mouseInfluence: 0.4,
    boundaryPush: 0.2
  };

  class Particle {
    constructor(x, y, size, speedX, speedY, color, shape) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.baseSize = size;
      this.speedX = speedX;
      this.speedY = speedY;
      this.color = color;
      this.shape = shape;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.03;
      this.opacity = Math.random() * 0.5 + 0.5;
      this.targetOpacity = this.opacity;
    }

    update() {
      // Apply movement
      this.x += this.speedX;
      this.y += this.speedY;
      
      // Apply friction
      this.speedX *= 0.96;
      this.speedY *= 0.96;
      
      // Rotation
      this.rotation += this.rotationSpeed;
      
      // Smooth opacity changes
      this.opacity += (this.targetOpacity - this.opacity) * 0.05;
      
      // Pulsing effect
      this.size = this.baseSize * (0.9 + Math.sin(Date.now() * 0.001) * 0.1);
    }

    draw(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;

      switch (this.shape) {
        case 'square':
          ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
          break;
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -this.size/1.5);
          ctx.lineTo(this.size/1.5, this.size/1.5);
          ctx.lineTo(-this.size/1.5, this.size/1.5);
          ctx.closePath();
          ctx.fill();
          break;
        default: // circle
          ctx.beginPath();
          ctx.arc(0, 0, this.size/2, 0, Math.PI * 2);
          ctx.fill();
      }

      ctx.restore();
    }
  }

  useEffect(() => {
    // Check if mobile device
    isMobile.current = window.innerWidth < 768 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create particles
    particles.current = [];
    for (let i = 0; i < config.particleCount; i++) {
      const color = config.colors[Math.floor(Math.random() * config.colors.length)];
      const shape = config.shapes[Math.floor(Math.random() * config.shapes.length)];
      const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
      
      particles.current.push(
        new Particle(
          Math.random() * width,
          Math.random() * height,
          size,
          (Math.random() - 0.5) * config.baseSpeed,
          (Math.random() - 0.5) * config.baseSpeed,
          color,
          shape
        )
      );
    }

    // Mouse trail effect
    const MAX_TRAIL_POINTS = 8;
    function updateMouseTrail(x, y) {
      mouse.current.trail.unshift({ x, y });
      if (mouse.current.trail.length > MAX_TRAIL_POINTS) {
        mouse.current.trail.pop();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Draw connections between particles first (behind particles)
      ctx.strokeStyle = 'rgba(12, 9, 80, 0.1)';
      ctx.lineWidth = 1.2;
      
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < config.connectionRadius) {
            ctx.globalAlpha = 1 - dist/config.connectionRadius;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Update and draw particles
      particles.current.forEach((p) => {
        // Mouse interaction
        if (mouse.current.x !== null && mouse.current.y !== null) {
          const dx = mouse.current.x - p.x;
          const dy = mouse.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < config.repulsionRadius) {
            const force = (config.repulsionRadius - dist) / config.repulsionRadius;
            p.speedX += (dx / dist) * force * config.mouseInfluence;
            p.speedY += (dy / dist) * force * config.mouseInfluence;
            
            // Change opacity when near mouse
            p.targetOpacity = 0.3 + force * 0.7;
          } else {
            p.targetOpacity = 0.5 + Math.random() * 0.3;
          }
        }
        
        // Boundary check with gentle push back
        if (p.x < 0) p.speedX += config.boundaryPush;
        if (p.x > width) p.speedX -= config.boundaryPush;
        if (p.y < 0) p.speedY += config.boundaryPush;
        if (p.y > height) p.speedY -= config.boundaryPush;
        
        p.update();
        p.draw(ctx);
      });

      // Draw mouse trail
      if (mouse.current.trail.length > 1) {
        ctx.strokeStyle = 'rgba(12, 9, 80, 0.2)';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(mouse.current.trail[0].x, mouse.current.trail[0].y);
        
        for (let i = 1; i < mouse.current.trail.length; i++) {
          const point = mouse.current.trail[i];
          ctx.lineTo(point.x, point.y);
        }
        ctx.stroke();
      }

      animationFrameId.current = requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    function handleMouseMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      updateMouseTrail(e.clientX, e.clientY);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  if (isMobile.current) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 1,
        width: "100vw",
        height: "100vh",
      }}
    />
  );
};

export default ParticleAnimation;