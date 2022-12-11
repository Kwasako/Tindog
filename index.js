import Dog from './Dog.js'
import dogsData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

document.getElementById("heart").addEventListener('click', displayBadge)
document.getElementById("cross").addEventListener('click', displayNope)

render()

function render() {
    document.getElementById('dog').innerHTML = currentDog.getDogHtml()
}

function end(){
    document.getElementById('dog').innerHTML=`
        <div>
            <p>There are no more dogs in your area</p>
        </div>`
    document.getElementById("cross").style.display = 'none'
    document.getElementById("heart").style.display = 'none'
    
}

function getNewDog() {
    currentDogIndex+=1
    currentDog = new Dog(dogsData[currentDogIndex])
    currentDogIndex < dogsData.length? render():end()
}
   
function displayBadge (){
    document.getElementById("accept").style.display = 'block'
     currentDog.setMatchStatus(true)
     setTimeout(()=> getNewDog(), 1000)
     setTimeout (()=>document.getElementById("accept").style.display = 'none', 1000)
}

function displayNope (){
    document.getElementById("reject").style.display = 'block'
    currentDog.setMatchStatus(false)
    setTimeout(()=> getNewDog(), 1000)
    setTimeout (()=>document.getElementById("reject").style.display = 'none' , 1000)
}


