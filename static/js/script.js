let mailinput = document.getElementById("email")
let eyes = document.getElementById("eyes")
let eyess = document.getElementById("eyess")
let brasdrt = document.getElementById("brasdrt")
let brasgch = document.getElementById("brasgch")
let passwdinput = document.getElementById("passwd")

mailinput.addEventListener('click', (e) => {
    eyes.style.top = "0rem"
    eyess.style.top = "-0.4rem"
})

mailinput.addEventListener("blur", () => {
    eyes.style.top = "-0.5rem"
    eyess.style.top = "-1rem"
});

passwdinput.addEventListener('click', (e) => {
    brasdrt.style.top = "-0rem"
    brasdrt.style.transform = "rotate(105deg)"
    brasgch.style.top = "-1.8rem"
    brasgch.style.transform = "rotate(75deg)"
})

passwdinput.addEventListener('blur', (e) => {
    brasdrt.style.top = "3.5rem"
    brasdrt.style.transform = "rotate(75deg)"
    brasgch.style.top = "2rem"
    brasgch.style.transform = "rotate(110deg)"
})