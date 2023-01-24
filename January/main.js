const canvas = document.getElementById('canvas')

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let mouse = []
// let p = new Particle(canvas.width / 2, canvas.height / 2)
// let q = new Particle(canvas.width / 2, canvas.height / 2) 
let qt = new Quadtree()

function draw() {
    ctx.fillStyle = '#333333'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(draw)
}

draw()

window.addEventListener('mousemove', (e) => {
    mouse = [e.clientX, e.clientY]
})