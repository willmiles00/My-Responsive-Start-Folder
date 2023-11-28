import { reviews } from "./reviews.js"
console.log(reviews)

//creates a card
const myTarget = document.querySelector("#cards")

for (let x= 0; x < reviews.length; x++){

    //creates a new section
    const mySection = document.createElement('section')
    const myName = document.createElement('h3')
    myName.textContent = reviews[x].name

    const myReview = document.createElement('p')
    myReview.textContent = reviews[x].text

    const myRating = document.createElement('div')

   

    for (let step = 0; step < reviews[x].stars; step++) {
        const starIndicator = document.createElement('img')
        starIndicator.src = './SVG/star-solid.svg'
        myRating.appendChild(starIndicator)
    }

    //build figure w/ child elements
    mySection.appendChild(myName)
    mySection.appendChild(myRating)
    mySection.appendChild(myReview)
    
    myTarget.appendChild(mySection)
}


function toggleMenu(){
document.getElementById("primaryNav").classList.toggle("open")
document.getElementById("hamburgerBtn").classList.toggle("open")
}

const hamburgerBtn = document.getElementById("hamburgerBtn")

hamburgerBtn.onclick = toggleMenu

// footer current year
const currentYear = new Date()
document.querySelector('#year').textContent = currentYear.getFullYear()

