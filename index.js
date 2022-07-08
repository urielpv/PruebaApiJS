
const url='https://api.datos.gob.mx/v1';

const ul=document.createElement('ul');

//htmlres=document.querySelector("#app");
 fetch(`${url}/calidadAire`)
 .then((response)=>response.json()

//  .then((calidadAire)=>{
//     calidadAire.forEach(calidad => {
        
//         let elemento=document.createElement("li");
//         document.createTextNode(`$calidad.stations`);
//     });
//  })


 .then(json=>console.log(json))
 
);