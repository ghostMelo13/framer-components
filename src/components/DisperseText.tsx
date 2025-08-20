'use client'; // For Next.js 13/14 app directory

import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const DisperseText = ({ text = 'YOUR NAME', color = 0x00ffff }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const appRef = useRef<PIXI.Application | null>(null);

    useEffect(() => {
        const app = new PIXI.Application({
            resizeTo: window,
            backgroundAlpha: 0,
            antialias: true,
        });

        if (containerRef.current) {
            containerRef.current.appendChild(app.view);
        }
        appRef.current = app;

        const textStyle = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 100,
            fill: 0xffffff,
        });

        const pixiText = new PIXI.Text(text, textStyle);
        pixiText.anchor.set(0.5);
        pixiText.x = app.screen.width / 2;
        pixiText.y = app.screen.height / 2;
        app.stage.addChild(pixiText);

        // Render text to canvas and extract pixels
        const extractCanvas = app.renderer.extract.canvas(pixiText);
        const ctx = extractCanvas.getContext('2d');
        const imageData = ctx.getImageData(0, 0, extractCanvas.width, extractCanvas.height).data;

        const particleContainer = new PIXI.ParticleContainer(
            2000,
            {
                scale: true,
                position: true,
                alpha: true,
            }
        );

        app.stage.addChild(particleContainer);

        const particles: any = [];
        const spacing = 4;
        const baseX = pixiText.x - extractCanvas.width / 2;
        const baseY = pixiText.y - extractCanvas.height / 2;

        for (let y = 0; y < extractCanvas.height; y += spacing) {
            for (let x = 0; x < extractCanvas.width; x += spacing) {
                const i = (y * extractCanvas.width + x) * 4;
                const alpha = imageData[i + 3];

                if (alpha > 128) {
                    const particle = new PIXI.Sprite(PIXI.Texture.WHITE);
                    particle.tint = color;
                    particle.position.set(baseX + x, baseY + y);
                    particle.scale.set(1);
                    particle.alpha = 1;
                    particleContainer.addChild(particle);

                    particles.push({
                        sprite: particle,
                        vx: (Math.random() - 0.5) * 8,
                        vy: (Math.random() - 0.5) * 8,
                    });
                }
            }
        }

        pixiText.visible = false;

        app.ticker.add(() => {
            particles.forEach((p) => {
                p.sprite.x += p.vx;
                p.sprite.y += p.vy;
                p.sprite.alpha -= 0.01;
            });
        });

        return () => {
            app.destroy(true, true);
        };
    }, [text, color]);

    return <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none" />;
};

export default DisperseText;
