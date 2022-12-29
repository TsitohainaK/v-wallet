import useConsoStore from "./conso.js";

const money = {
  actual: 0,
  todays: 0
};


export default function useMoneyStore(){
  const consoStore = useConsoStore();
  
  function setMoney(_money){
    money.actual = _money.actual;
    money.todays = _money.todays;
  }

  function setActual(_actual){
    money.actual = _actual;
  }

  function setTodays(){
    const date = new Date();
    const todayFormated = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    
    let today = 0;

    consoStore.consos.forEach(conso => {
      if(conso.formatedDate === todayFormated){
        today += conso.cost;
      }
    });
    money.todays = today;
  }

  return {money, setMoney, setActual, setTodays};
}