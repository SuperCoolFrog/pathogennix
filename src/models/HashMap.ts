class HashMap<K,V> extends Array<[K, V]> {
  
  set(key: K, value: V) {
    const index = this.findIndex((entry) => entry[0] === key)
    
    if (index < 0) {
      this.push([key, value])
    } else {
      this[index] = [key, value];   
    }
  }

  get(key: K): V | undefined {
     const entry = this.find((entry) => entry[0] === key)
     return entry && entry[1];
  }
  
  getWithDefault(key: K, def: V): V {
     const value = this.get(key);
     return value || def;
  }
  
  clear() {
    this.length = 0;
  }

  clone() {
    const cloned = new HashMap<K,V>();
    
    this.forEach(([k, v]) => cloned.push([k,v]));
    
    return cloned;
  }
  
  ref() {
    return this;  
  }
}

export default HashMap;