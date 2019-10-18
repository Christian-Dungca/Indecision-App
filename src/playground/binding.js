const obj = {
    name: 'vikram',
    getName(){
        return this.name;
    }
}

// loses context of what this is
const getNameWrong = obj.getName;
console.log(getNameWrong());

// data binding, use the first argument to set the this context 
const getNameRight = obj.getName.bind(obj);
const getNameOther = obj.getName.bind({name : 'andrew'});
console.log(getNameRight());