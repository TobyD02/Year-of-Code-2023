class Particle {
    // Circular
    constructor(_x, _y) {
        this.x = _x
        this.y = _y
        this.r = 10
        this.colled = false
    }

    draw(ctx) {
        if (this.colled) ctx.fillStyle = '#990000'
        else ctx.fillStyle='#999999'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
    }

    isColliding(particle) {
        let dist = Math.sqrt(Math.pow(this.x - particle.x, 2) + Math.pow(this.y - particle.y, 2))
        if (dist < (particle.r + this.r)) this.colled = true
        else this.colled = false;
    }

}