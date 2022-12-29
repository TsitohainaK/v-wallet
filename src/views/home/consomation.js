import useConsoStore from "../../store/conso.js"

export default function Consomation(conso){
  const formater = Intl.NumberFormat("fr");
  const consoStore = useConsoStore();

  function script(){
   const btnElt = document.getElementById(conso.id);

   btnElt.addEventListener("click", ()=>{
    consoStore.removeConso(conso);
    console.log(consoStore);
   })
  }

  const render = () => 
    /*html*/
 `
  <div class="card conso" style="margin-bottom: 5px;">
    <div class="title">${conso.name}</div>
    <div class="content flex items-center justify-end">
      <h1 class="cost text-xlarge font-bolder text-right">${formater.format(conso.cost)}Ar</h1>
      <button id="${conso.id}" class="action">Remove</button>
    </div>
  </div>
  `
  
  return {
    render, script
  }
}