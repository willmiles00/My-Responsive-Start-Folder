function toggleMenu(){
document.getElementById("primaryNav").classList.toggle("open")
}

const hamburgerBtn = document.getElementById("hamburgerBtn")

hamburgerBtn.onclick = toggleMenu

// footer current year
const currentYear = new Date()
document.querySelector('#year').textContent = currentYear.getFullYear()

