import { ref } from "../utils/reactivity.js";
import useConsoStore from "./consoStore.js";

const money = ref({
  actual: 0,
  todays: 0
})


export default function useMoneyStore(){
  const consoStore = useConsoStore();
  
  function setMoney(_money){
    money.value.actual = _money.actual;
    money.value.todays = _money.todays;
  }

  function setActual(_actual){
    console.log("lol");
    money.value.actual = _actual;
  }

  function setTodays(){
    const date = new Date();
    const todayFormated = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    
    let today = 0;
    
    if(consoStore.consos.value){consoStore.consos.value.forEach(conso => {
      if(conso.formatedDate === todayFormated){
        today += conso.cost;
      }
    });}
    money.value.todays = today;
  }

  return {money, setMoney, setActual, setTodays};
}