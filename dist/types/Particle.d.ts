import { IConfettiOptions } from './Confetti';
declare enum RotationDirection {
    Positive = 1,
    Negative = -1,
    None = 0
}
export default class Particle {
    constructor(context: CanvasRenderingContext2D, getOptions: () => IConfettiOptions, x: number, y: number);
    context: CanvasRenderingContext2D;
    radius: number;
    x: number;
    y: number;
    w: number;
    h: number;
    vx: number;
    vy: number;
    shape: number;
    angle: number;
    angularSpin: number;
    color: string;
    rotateY: number;
    rotationDirection: RotationDirection;
    getOptions: () => IConfettiOptions;
    update(): void;
}
export {};
