//9EED 'api'
function rdm(max){
    return Math.floor(Math.random()*(max +1));
};
function random( min, max, floor){
    if (floor) return Math.floor((Math.random()*(max - min + 1)) + min);
    return (Math.random()*(max - min)) + min;
};
function shift(x){
    return Math.floor((Math.random()*(x*2)) - x);
}
function write(input){
    console.log('%c' + input, 'color: #AEF');
    return void 0;
};
function error(input){
    console.log('%c' + input, 'color: #F54;');
    return void 0;
};
function $(id){
    return document.getElementById(id);
};
// code

let canvas = $('canvas')
let c = canvas.getContext('2d')

let width = window.innerWidth
let height = window.innerHeight - 9

canvas.width = width
canvas.height = height

let stars = 100
for ( let i = 0 ; i < stars ; i++){
    c.fillStyle = `hsl(0, 0%, ${random( 10, 90)}%)`
    c.fillRect( rdm(width), rdm(height), random(0.8, 1.5), random(0.8, 1.5))
}

c.fillStyle = `#EEE`
c.strokeStyle = `#EEE`

let sft = 150
for ( let a = 0 ; a < 2 ; a++){
c.beginPath()
let x = random( 150, width - 150)
let y = random( 150, height - 150)
for ( let i = 0 ; i < 4 ; i++){
    c.fillRect( x-2, y-2, 4, 4)
    c.lineTo(x,y)
    if(rdm(1) == 0){
        c.stroke()
        //
        c.beginPath()
        let X = x
        let Y = y
        for ( let i = 0 ; i < 2 ; i++){
            c.fillRect( X-2, Y-2, 4, 4)
            c.lineTo( X, Y)
            X += shift(sft)
            Y += shift(sft)
        }
        c.stroke()
        //
        c.beginPath()
        c.moveTo(x,y)
    }
    y += shift(sft)
    x += shift(sft)
}
c.stroke()
}


c.fillStyle = `#EEE`

for ( let i = 0 ; i < 0 ; i++){
    let x = rdm(width)
    let y = rdm(height)
    let h = rdm(255)
    for ( let a = 0 ; a < 30 ; a++){
        c.fillStyle = `hsl(${h+shift(40)}, 90%, 60%)`
        c.fillRect( x + shift(70), y + shift(70), 1, 1)
    }
}













