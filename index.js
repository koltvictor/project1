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


function renderFeature (obj) {
    const featureTarget = document.createElement('h3')
    featureTarget.textContent = obj.target
    const featureBox = document.getElementById('feature')
    featureBox.append(featureTarget)
    console.log(featureBox)

}

const li = document.querySelector('ul#fetchedData')
li.addEventListener('click', e => {
    const targetValue = e.target.textContent
    const featureExercise = targetValue.replace(/\s/g, '')

    fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${featureExercise}`, {
        "method" : "GET",
        "headers" : {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": "9074bf701emsh2b8696dac91ac18p161ae0jsn7153acb84d2d"
        }
    })
    .then(resp => resp.json())
    .then(array => {
        array.forEach(obj => {
            if (featureExercise !== obj.target.name) {
                renderFeature(obj);
            }
            else {
                alert('Please Try Again')
            }
        })
        
})
})
