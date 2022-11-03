const screen = document.getElementById('screen')

function jump() {
    screen.innerHTML = "jumping"
}

function moveLeft() {
    screen.innerHTML = "lefting"
}

export {
    jump,
    moveLeft
}