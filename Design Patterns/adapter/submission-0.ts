class SquareHole {
    /**
     * @param {number} sideLength
     */
    sideLength:number;
    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }

    /**
     * @param {Square} square
     * @return {boolean}
     */
    canFit(square: Square): boolean {
        return this.sideLength >= square.getSideLength();
    }
}

class Square {
    /**
     * @param {number} sideLength
     */
    sideLength:number;
    constructor(sideLength = 0) {
        this.sideLength = sideLength;
    }

    /**
     * @return {number}
     */
    getSideLength(): number {
        return this.sideLength;
    }
}

class Circle {
    /**
     * @param {number} radius
     */
    radius:number;
    constructor(radius: number) {
        this.radius = radius;
    }

    /**
     * @return {number}
     */
    getRadius(): number {
        return this.radius;
    }
}

class CircleToSquareAdapter extends Square {
    /**
     * @param {Circle} circle
     */
    circle:Circle;
    constructor(circle: Circle) {
        super();
        this.circle = circle;
        
    }

    /**
     * @return {number}
     */
    getSideLength(): number {
        // Write your code here
        return this.circle.getRadius()*2;
    }
}
