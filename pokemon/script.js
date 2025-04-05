console.log("testing")
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(respoose=>respoose.json())
// .then(data=>console.log(data.weight))
// .catch(error=>console.error(error))

async function  fetchData() {
    try{
        const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("not found")
        }
            
     const data= await response.json()
     const pokemonSprite=data.sprites.front_shiny;
     const img=document.getElementById("pokemonImg")
     img.src=pokemonSprite
     img.style.display="block"
    } 
    

    

   
   catch(error){
    console.error(error)
   }    
}