let consos = [];

export default function useConsoStore(){
  function setConso(_conso){
    consos = _conso;
  }

  function addConso(_conso){
    consos.push(_conso);
  }

  function removeConso(_conso){
    consos = consos.filter(conso => {
      return conso.id !== _conso.id
    });
  }
  
  return {
    setConso, addConso, removeConso, consos
  }
}