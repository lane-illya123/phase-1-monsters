fetch('http://localhost:3000/monsters')
.then(res => res.json())
.then(data => console.log(data))


function getMonsters (){

console.log(fetch('http://localhost:3000/monsters'))
.then(res => res.json())
.then(data => console.log(data))
}



function initialize (){
    getMonsters();
}

initialize();