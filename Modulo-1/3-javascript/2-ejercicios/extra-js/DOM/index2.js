const newEmptyDiv = document.createElement('div')
document.body.append(newEmptyDiv)

const newDivWithP = document.createElement('div')
newDivWithP.append(document.createElement('p'))
document.body.append(newDivWithP)

const newDivWith6P = document.createElement('div')
for (let i = 0; i < 6; i++) {
	let pElement = document.createElement('p')
	newDivWith6P.append(pElement)
}
document.body.append(newDivWith6P);


const dynamicP = document.createElement('p')
dynamicP.innerText = 'Soy dinámico'
newEmptyDiv.append(dynamicP)

const title = document.querySelector('h2.fn-insert-here')
title.innerText = 'Wubba Lubba dub dub'


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const appsList = document.createElement('ul')
document.body.append(appsList)

apps.map((app) => {
const appElement = document.createElement('li')
appsList.append(appElement)
appElement.innerText = app
}) 


const elementsToRemove = document.querySelectorAll('.fn-remove-me')
elementsToRemove.forEach((el) => el.remove())


const divsToInsert = document.querySelectorAll('div.fn-insert-here')
const middleP = document.createElement('p')
middleP.innerText = 'Voy en medio!'
document.body.insertBefore(middleP, divsToInsert[1])

divsToInsert.forEach((divToInsert) => {
	const pToInsert = document.createElement('p')
	pToInsert.innerText = 'Voy dentro!'
	divToInsert.append(pToInsert)
})
