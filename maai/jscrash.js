// const userA = [
//     "Jason Ikuenobe",
//     "Lagos",
//     25000,
//     true,
//     false
// ]
// const userB = {
//     fullName: 'Jason',
//     Location: 'Ibadan',
//     balance: '7000',
//     ifTransfer: true,
//     ifwithdrawn: false
// }
// console.log(userA[2], userB.Location) 

const log = (n)=> console.log(n)
const dodo = (g)=> document.getElementById(g)
// or
// const log = function (n) { console.log(n) }




const myArr = ['dog','red', 'song']
let yh = document.getElementById('yh')
const dell = document.getElementById('delete')

// ARRAY INDEXOF
// log(myArr.indexOf('dog'))
// log(myArr.lastIndexOf('dog'))

// let show = ''
// //MORE ARRAY METHODS
// for(let i = 0; i < myArr.length; i++ ){
    //     let show += () `<li> ${myArr[i].toString() } </li>`
    // }
    // document.querySelector('ul').innerHTML = show
    

//ARRAY FIND
// document.getElementById('gg').innerHTML = (myArr.find((element) => {
//     return element.toString().includes('e') 
// } ))

//ARRAY SLICE 
log(
    myArr.slice(1, myArr.length)
)
log(myArr)
// const substitute = [...myArr]
// log(substitute);
// //ARRAY SPLICE
// const deleted = substitute.splice(1, 3)
// log(deleted)
// log(substitute)


// document.querySelectorAll('li').forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log
//     })
// });

const theNew = ["Jason", "Location", "Interests", "Mentality"]

document.getElementById('gg').innerHTML = theNew
document.getElementById('gh').innerHTML = theNew

function eraser(item){
    if(theNew.indexOf(item) == -1) return
    theNew.splice(theNew.indexOf(item),1)
    document.getElementById('gh').innerHTML = theNew
}
eraser('Location')
eraser('Jason')



