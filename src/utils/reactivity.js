export function watch(refs, onChange){
  function defineProperty(_ref){
    const ov = _ref.value
    Object.defineProperty(_ref, 'value', {
      get(){
        return this._value || ov
      },
      set(value){
        let prev = this._value || ov
        this._value = value;
        onChange(prev,value);
        return true
      }
    })
  }

  if(Array.isArray(refs)){
    refs.forEach(ref => {
      defineProperty(ref)
    });
  }else{
    defineProperty(refs)
  }
}

export function ref(v){
  const i = {value: v};

  return new Proxy(i, {
    get: function(t,k){
      return t[k];
    },
    set: function(t,k,v){
      if(k in t){
        t[k] = v;
      }else{
        throw new Error("Cannot add a new property in a ref, use an object as a value instead")
      }
      return true;
    },
  })
}

export function emit(name, data){
  const customEvent = new CustomEvent(name, { detail: { ...data } });
  window.dispatchEvent(customEvent);
}