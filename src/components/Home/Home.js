import React, { useEffect, useRef } from 'react';

import colors from '../../utility/colors';

const Home = () => {
    const canvasRef = useRef(null);

    const getRandomPosition = (radius) => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        while (x >= window.innerWidth - radius || x <= (radius / 2)) {
            x = Math.random() * window.innerWidth;
        }

        while (y >= window.innerHeight - radius || y <= (radius / 2)) {
            y = Math.random() * window.innerHeight;
        }

        return [x, y];
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.height = window.innerHeight - 71;
        canvas.width = window.innerWidth;

        const context = canvas.getContext('2d');
        const obseverRadius = 100;

        let mousePosition = {
            x: null,
            y: null,
        }

        window.addEventListener('mousemove', (event) => {
            mousePosition.x = event.x;
            mousePosition.y = event.y;
        })

        window.addEventListener('resize', () => {
            canvas.height = window.innerHeight - 71;
            canvas.width = window.innerWidth;
        })

        class Circle {
            constructor(x, y, radius, dx, dy, fillColor) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.stableRadius = radius;
                this.maxRadius = radius + 30;
                this.dx = dx;
                this.dy = dy;
                this.fillColor = fillColor;
            }

            getRadius() {
                return this.radius;
            }

            draw() {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                context.strokeStyle = 'transparent';
                context.fillStyle = this.fillColor;
                context.fill();
                context.stroke();
            }

            update() {
                if (this.x + this.radius >= window.innerWidth || this.x - (this.radius / 2) <= 0) this.dx = -this.dx;
                if (this.y + this.radius >= window.innerHeight || this.y - (this.radius / 2) <= 0) this.dy = -this.dy;

                this.x += this.dx;
                this.y += this.dy;

                this.onMouseCheck()
                this.draw();
            }

            onMouseCheck() {
                if (!mousePosition.x || !mousePosition.y) return;

                if (Math.abs(this.x - mousePosition.x) <= obseverRadius &&
                    Math.abs(this.y - mousePosition.y) <= obseverRadius) {
                    if (this.radius < this.maxRadius) this.radius += 3;
                } else {
                    if (this.stableRadius < this.radius) this.radius -= 3;
                }
            }
        }

        let circlesArray = [];
        for (let i = 0; i < 300; i++) {
            const radius = (Math.random() + 0.5) * 10;
            let [x, y] = getRandomPosition(radius);
            let dx = ((Math.random() - 0.5) * 3);
            let dy = ((Math.random() - 0.5) * 3);
            const fillColor = colors[Math.random().toFixed(1) * 10];

            const circle = new Circle(x, y, radius, dx, dy, fillColor);
            circlesArray.push(circle);
        }

        const animate = () => {
            requestAnimationFrame(animate)

            context.clearRect(0, 0, window.innerWidth, window.innerHeight);

            for (let circle of circlesArray) {
                circle.update();
            }
        }

        animate();
    }, [])

    return <canvas ref={canvasRef}></canvas>
}

export default Home;
