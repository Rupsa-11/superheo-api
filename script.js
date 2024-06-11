 const SUPERHERO_TOKEN ='114769218331953'
const base_URL=`https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newherobutton=document.getElementById('newherobutton')
const heroimgDiv=document.getElementById('heroimg')
const searchbutton=document.getElementById('searchbutton')
const searchinput=document.getElementById('searchinput')
const gethero = (id,name)=>{
  fetch(`${base_URL}/${id}`)
  .then(response=>response.json())
  .then(json=>{
    console.log(json.powerstats)
    const superhero = json
    showheroinfo(superhero)
  })
}
const stattoEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}
const showheroinfo = (character) => {
  const name = `<h2>${character.name}</h2>`

  const img = `<img src="${character.image.url}" height=200 width=200/>`
  
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${stattoEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join('')
  
  heroimgDiv.innerHTML = `${name}${img}${stats}`
}

const getsearchhero = (name) => {
  console.log(searchinput.value)
  fetch(`${base_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      showheroinfo(hero) 
    })
}
const randomhero = () => {
  const numberofheroes = 731
  return Math.floor(Math.random() * numberofheroes) + 1
}
newherobutton.onclick = () => gethero(randomhero());
searchbutton.onclick = () =>  getsearchhero(searchinput.value);
function button(){
  
}