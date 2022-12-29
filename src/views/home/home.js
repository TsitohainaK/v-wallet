import useMoneyStore from "../../store/money.js"
import useConsoStore from "../../store/conso.js"
import { storageGet } from "../../utils/localStorage.js"
import Consomation from "./consomation.js"

export default function Home() {
  
  const formater = Intl.NumberFormat("fr");
  const moneyStore = useMoneyStore();
  const consoStore = useConsoStore();

  const moneyStorage = storageGet("money");
  const consoStorage = storageGet("conso");

  if(moneyStorage) moneyStore.setMoney(moneyStorage);
  if(consoStorage) consoStore.setConso(consoStorage);
  moneyStore.setTodays();
  
  function script(){
    
    const actualElt = document.getElementById('actual');
    const todaysElt = document.getElementById('todays');
    const consosElt = document.getElementById('consoselt');

    const money = moneyStore.money;
    let consos = "";
    consoStore.consos.map(conso => {consos += Consomation(conso).render()})
    
    actualElt.innerHTML = formater.format(money.actual);
    todaysElt.innerHTML = formater.format(money.todays);
    consosElt.innerHTML = consos;

    consoStore.consos.map(conso => {consos += Consomation(conso).script()})
  }

  
  const render = () => 
  /*html*/
  `
  <div id="content" class="bg-gray h-content p-2 flex flex-col">
    <div class="my-1 uppercase">Overview</div>
    <div class="overview | flex w-full">
      <div class="card w-1/2">
        <div class="title">Current balance</div>
        <div class="content">
          <h1 class="text-xlarge font-bolder text-right"><span id="actual">0</span>Ar</h1>
        </div>
      </div>
      <div class="card w-1/2">
        <div class="title">Today's consomation</div>
        <div class="content">
          <h1 class="text-xlarge font-bolder text-right"><span id="todays">0</span>Ar</h1>
        </div>
      </div>
    </div>
    <div class="my-1 uppercase">Consomations</div>
    <div id="consoselt" class="category flex flex-col"></div>
  </div>
  `;

  return {
    render, script
  }
}