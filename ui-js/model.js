class Model {
    constructor(){
      this._data = {};
    }
  
    add(key, value){
      this._data[key] = value;
      console.log ("models - add key :" + key);
      console.log ("models - add value :" + value);
    }
  
    get(key){
      console.log ("models get key-key :" + key);
      console.log("models get key-data :" + this._data[key]);
      return this._data[key];
    }
    remove(key){
        delete this._data[key];
    }
}
  
const model = new Model();
Object.freeze(model);

module.exports = model;