//--1--
let h1 = document.querySelectorAll('h1')[0].innerHTML = 'Les attributs class et id'
let h1Query = document.querySelectorAll('h1')[0]

//--2--
let h2 = document.querySelectorAll('h2')[0].innerHTML = 'Exercice 2 partie A'

//--3--
let h2_1 = document.querySelectorAll('h2')[1].innerHTML = 'Exercice 2 partie B'

//--4--
let p = document.querySelectorAll('p')[0].innerHTML = `L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>`

//--5--
let p_1 = document.querySelectorAll('p')[1].innerHTML = `La manipulation de l'attribut Style peut-être une <i>solution</i> rapide`

//--6--
h1Query.setAttribute('id', 'bigTitle');

//--7--
let div = document.querySelectorAll('div')[0]
div.setAttribute('class','container')

//--8--
for (let i = 0; i < 2; i++) {
    let h2AllQuery = document.querySelectorAll('h2')[i]
    h2AllQuery.setAttribute('class','title')
}

//--9--
for (let i = 0; i < 2; i++) {
    let pAllQuery = document.querySelectorAll('p')[i]
    pAllQuery.setAttribute('class','text')
}

//--10--
let section = document.querySelectorAll('section')[0]
section.setAttribute('class','margin-bottom border-black padding')

//--11--
let section2 = document.querySelectorAll('section')[1]
section2.setAttribute('class','margin-top border-black padding')

//--12--
let divblue = document.querySelectorAll('div')[1]
divblue.style.backgroundColor = "blue"
divblue.style.width = "20px"
divblue.style.height = "20px"

