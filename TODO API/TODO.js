let Things = async () => {
    let answer = await fetch('https://jsonplaceholder.typicode.com/todos')
                    .then(res => res.json())
                    .then(json => {
                        localStorage.setItem('Things', JSON.stringify(json));
                    }).catch((err)=>{
                        console.log(err);
                    })
                    
}
Things()

let Jasonstodo = JSON.parse(localStorage.getItem('Things'))

let content = document.querySelector('.contentplace')

let All = document.getElementById('all')

let completed = document.getElementById('completed')

let uncompleted = document.getElementById('uncompleted')
function display() {
    wipe()
    for (let index = 0; index < Jasonstodo.length; index++){
        const element = Jasonstodo[index];
        
        content.innerHTML += `
        <div class="contentbox">
            <span class="o1">${element.id} </span>
            <span class="o1">${element.title} </span>
            <span class="o1">${element.completed} </span>
        </div>
        `
    }

    
        
}
All.addEventListener('click', display)

// let comp = []

function completeded() {
    wipe()
    for (let i = 0; i < Jasonstodo.length; i++){
        if(Jasonstodo[i].completed == true){
            // comp.push(Jasonstodo[i])

            const elements = Jasonstodo[i]
    
            content.innerHTML += `
            <div class="contentbox">
            <span class="o1">${elements.id} </span>
            <span class="o1">${elements.title} </span>
            <span class="o1">${elements.completed} </span>
        </div>
        `
        }

    }

    // console.log(comp);
    
}
completed.addEventListener('click', completeded)

function uncompleteded() {
    wipe()
    for (let i = 0; i < Jasonstodo.length; i++){
        if(Jasonstodo[i].completed == false){
            // comp.push(Jasonstodo[i])

            const elements = Jasonstodo[i]
    
            content.innerHTML += `
            <div class="contentbox">
            <span class="o1">${elements.id} </span>
            <span class="o1">${elements.title} </span>
            <span class="o1">${elements.completed} </span>
        </div>
        `
        }

    }

    // console.log(comp);
    
}
uncompleted.addEventListener('click', uncompleteded)

let wipe = () => {
    content.innerHTML = ``
}