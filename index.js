// JS GOES HERE //

const APIURL = "https://exercisedb.p.rapidapi.com/exercises"

const button = document.getElementById('submitButton')
const list = document.getElementById('fetchedData')
const routine = document.getElementById('routine')
const searchForm = document.getElementById('search-form')

function renderExercises(obj) {
    const newExercise = document.createElement('li')
    newExercise.textContent = obj.name
    newExercise.id = obj.id
    list.append(newExercise)
}

   
searchForm.addEventListener('submit', event => {
    event.preventDefault()
    const submitValue = event.target.search.value
    console.log(submitValue)
        
    fetch(`https://exercisedb.p.rapidapi.com/exercises/target/${submitValue}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
        }
    })
    .then(resp => resp.json())
    .then(arr => {
        arr.forEach(obj => {
            if (submitValue !== obj.target.value) {
                renderExercises(obj);
            }
            else {
                alert('Please search again');
            }
            console.log(obj.length)
    })
    })
})


const li = document.querySelector('ul#fetchedData')
li.addEventListener('click', e => {
    const featureExercise = e.target.textContent
    console.log(featureExercise)

    fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${featureExercise}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
        }
    })
    .then(response => response.json())
    .then(arr => {
        arr.forEach(obj => {
            const featureBox = document.getElementById('feature')
            
            const featureImg = document.createElement('img')
            featureImg.src = obj.gifUrl
            featureBox.append(featureImg)

            const featureTarget = document.createElement('h3')
            featureTarget.textContent = "Target muscle group: " + obj.target
            featureBox.append(featureTarget)

            const featureName = document.createElement('h3')
            featureName.textContent = "Exercise name: " + obj.name
            featureBox.append(featureName)

            const featureEquip = document.createElement('h3')
            featureEquip.textContent = "Equipment: " + obj.equipment
            featureBox.append(featureEquip)

            let btn = document.createElement('button')
            btn.innerHTML = "Add to My Routine"
            featureBox.appendChild(btn)

            btn.addEventListener('click', e => {
                const routine = document.getElementById('myRoutine')
                const newEx = document.createElement('li')
                newEx.textContent = obj.name
                newEx.id = "routineList"
                routine.append(newEx)

                const routineList = document.querySelector('routineList')
                xBtn = document.createElement('button')
                btn.innerHTML = "x"
                routineList.append(btn)
                xBtn.addEventListener('click', e => {
                    
                })
            })



        })
    })

    
    })          

