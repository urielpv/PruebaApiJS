
const apiButton=document.getElementById('apiButton');
const apiData=document.getElementById('apiData');
const typess=document.getElementById('type');
const info=document.getElementById('info');
const ataque=document.getElementById('ataque');
const defensa=document.getElementById('defensa');
const raresa=document.getElementById('raresa');
const atributo=document.getElementById('atributo');
const arquetipo=document.getElementById('arquetipo');
const imagen=document.getElementById('imagen');


const callAPI=()=>{
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician')
    .then(res=> res.json())
      .then(data=>{
          apiData.innerText=`Nombre:${JSON.stringify(data.data[0].name)}`
          typess.innerText=`Tipo: ${JSON.stringify(data.data[0].type)}`
      info.innerText=`Descripcion: ${JSON.stringify(data.data[0].desc)}`
       ataque.innerText=`Ataque: ${JSON.stringify(data.data[0].atk)}`
       defensa.innerText=`Defensa: ${JSON.stringify(data.data[0].def)}`
       raresa.innerText=`Raresa: ${JSON.stringify(data.data[0].race)}`
      atributo.innerText=`Atributo: ${JSON.stringify(data.data[0].attribute)}`
       arquetipo.innerText=`Arquetipo: ${JSON.stringify(data.data[0].archetype)}`
        })
    //.then(data=>console.log(data.data[0].archetype))
    .catch(e=>console.error(new Error(e)))
       // console.log(res);
       
    
}
apiButton.addEventListener('click', callAPI);