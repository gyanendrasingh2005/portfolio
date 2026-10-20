import React, { useRef, useEffect, useState, useCallback } from 'react';

interface HeroHalftonePortraitProps {
  imageSrc?: string;
  className?: string;
}

export const HeroHalftonePortrait: React.FC<HeroHalftonePortraitProps> = ({
  imageSrc = '/gyanendra-signal.jpg',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [useHalftone, setUseHalftone] = useState<boolean>(true);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const animFrameRef = useRef<number | null>(null);

  const renderHalftone = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas || !useHalftone) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    // Display dimensions (responsive)
    const rect = canvas.getBoundingClientRect();
    const displayWidth = rect.width || 600;
    const displayHeight = rect.height || 750;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = displayWidth * dpr;
    canvas.height = displayHeight * dpr;
    ctx.scale(dpr, dpr);

    // Create offscreen canvas to sample image pixels
    const sampleWidth = Math.floor(displayWidth / 3.8); // high density sample grid
    const sampleHeight = Math.floor(displayHeight / 3.8);

    const offscreen = document.createElement('canvas');
    offscreen.width = sampleWidth;
    offscreen.height = sampleHeight;
    const offCtx = offscreen.getContext('2d', { willReadFrequently: true });
    if (!offCtx) return;

    // Cover crop the image into the offscreen buffer
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = displayWidth / displayHeight;
    let renderW = sampleWidth;
    let renderH = sampleHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (imgAspect > canvasAspect) {
      renderW = sampleHeight * imgAspect;
      offsetX = (sampleWidth - renderW) / 2;
    } else {
      renderH = sampleWidth / imgAspect;
      offsetY = (sampleHeight - renderH) / 2;
    }

    offCtx.drawImage(img, offsetX, offsetY, renderW, renderH);

    let imgData: ImageData;
    try {
      imgData = offCtx.getImageData(0, 0, sampleWidth, sampleHeight);
    } catch {
      return;
    }

    const pixels = imgData.data;
    const gridSpacing = 4.2; // dot pitch in CSS pixels
    const cols = Math.floor(displayWidth / gridSpacing);
    const rows = Math.floor(displayHeight / gridSpacing);

    const drawFrame = () => {
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      const mouseActive = mouseRef.current.active;

      for (let r = 0; r < rows; r++) {
        const y = r * gridSpacing + gridSpacing / 2;
        // Fade out dots towards the bottom (from 50% to 92% of height)
        const verticalFade = y < displayHeight * 0.48
          ? 1
          : Math.max(0, 1 - (y - displayHeight * 0.48) / (displayHeight * 0.45));

        if (verticalFade <= 0.01) continue;

        for (let c = 0; c < cols; c++) {
          const x = c * gridSpacing + gridSpacing / 2;

          // Map canvas coordinates to offscreen sample coordinates
          const sampleX = Math.floor((x / displayWidth) * sampleWidth);
          const sampleY = Math.floor((y / displayHeight) * sampleHeight);

          if (sampleX >= sampleWidth || sampleY >= sampleHeight) continue;

          const idx = (sampleY * sampleWidth + sampleX) * 4;
          const red = pixels[idx];
          const green = pixels[idx + 1];
          const blue = pixels[idx + 2];

          // Compute perceived luminance
          const luminance = (0.299 * red + 0.587 * green + 0.114 * blue) / 255;

          // Discard dark pitch black background
          if (luminance < 0.04) continue;

          // Check for golden/amber rim light (high red/green, low blue)
          const isAmberRim = red > 80 && green > 45 && blue < 70 && red > blue * 1.5;

          // Calculate distance from cursor for interactive ripple
          let distFactor = 1;
          let shiftX = 0;
          let shiftY = 0;

          if (mouseActive) {
            const dx = x - mouseX;
            const dy = y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 100) {
              const push = (1 - dist / 100) * 4;
              shiftX = (dx / (dist || 1)) * push;
              shiftY = (dy / (dist || 1)) * push;
              distFactor = 1 + (1 - dist / 100) * 0.35;
            }
          }

          // Dot radius mapped to luminance with slight contrast curve
          const baseRadius = Math.pow(luminance, 1.15) * (gridSpacing * 0.52);
          const finalRadius = Math.max(0.4, baseRadius * distFactor);

          ctx.beginPath();
          ctx.arc(x + shiftX, y + shiftY, finalRadius, 0, Math.PI * 2);

          if (isAmberRim) {
            // Warm amber rim glow dots (#ff8c59 to #ffaa6b)
            const alpha = Math.min(1, (luminance * 1.25) * verticalFade);
            ctx.fillStyle = `rgba(255, 140, 89, ${alpha})`;
          } else {
            // High-contrast monochrome dots (#f1eee8 ink white)
            const alpha = Math.min(1, (luminance * 1.05 + 0.08) * verticalFade);
            ctx.fillStyle = `rgba(241, 238, 232, ${alpha})`;
          }

          ctx.fill();
        }
      }
    };

    drawFrame();
  }, [useHalftone]);

  // Load and sample image for halftone processing
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      setImageLoaded(true);
      renderHalftone(img);
    };

    const handleResize = () => {
      if (img.complete) {
        renderHalftone(img);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [imageSrc, renderHalftone]);

  // Mouse move interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };

    if (imageLoaded) {
      const img = new Image();
      img.src = imageSrc;
      if (img.complete) {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = requestAnimationFrame(() => renderHalftone(img));
      }
    }
  };

  const handleMouseLeave = () => {
    mouseRef.current.active = false;
    if (imageLoaded) {
      const img = new Image();
      img.src = imageSrc;
      if (img.complete) {
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        animFrameRef.current = requestAnimationFrame(() => renderHalftone(img));
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full flex items-center justify-center select-none ${className}`}
      style={{ isolation: 'isolate' }}
    >
      {/* 1. Underlying photographic layer with gradient mask fade */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-700 pointer-events-none ${
          useHalftone ? 'opacity-25' : 'opacity-90'
        }`}
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, #000 48%, rgba(0,0,0,0.6) 72%, transparent 92%)',
          maskImage: 'linear-gradient(to bottom, #000 48%, rgba(0,0,0,0.6) 72%, transparent 92%)',
        }}
      >
        <img
          src={imageSrc}
          alt="Gyanendra Singh"
          className="w-full h-full object-contain object-top"
          loading="eager"
        />
      </div>

      {/* 2. Halftone Signal Canvas Overlay */}
      {useHalftone && (
        <canvas
          ref={canvasRef}
          className="relative z-10 w-full h-full pointer-events-none"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, #000 55%, rgba(0,0,0,0.7) 78%, transparent 94%)',
            maskImage: 'linear-gradient(to bottom, #000 55%, rgba(0,0,0,0.7) 78%, transparent 94%)',
          }}
        />
      )}

      {/* 3. Subtle Mode Switcher (Halftone Dither / Studio Photo) */}
      <button
        type="button"
        onClick={() => setUseHalftone(!useHalftone)}
        aria-label="Toggle Halftone Signal View"
        title="Toggle Halftone Digital Dither / Studio Portrait"
        className="absolute bottom-2 right-4 z-20 pointer-events-auto px-2.5 py-1 rounded bg-[#080808c4] hover:bg-[#151515] border border-[rgba(241,238,232,0.12)] hover:border-[#ff8c59] text-[9px] font-mono tracking-wider text-[#aaa9a4] hover:text-[#f1eee8] transition-all flex items-center gap-1.5 shadow-lg backdrop-blur-md"
      >
        <span
          className={`w-1.5 h-1.5 rounded-full ${useHalftone ? 'bg-[#ff8c59] animate-pulse' : 'bg-[#aaa9a4]'}`}
        />
        <span>{useHalftone ? 'SIGNAL DITHER' : 'PHOTO MODE'}</span>
      </button>
    </div>
  );
};
