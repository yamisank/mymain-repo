const screen = document.getElementById('screen')

export function play() {
    screen.innerHTML = "playing"
}

export function pause() {
    screen.innerHTML = "pausing"
}

