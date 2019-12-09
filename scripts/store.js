import item from './item.js';

   let items= [];
    let hideCheckedItems= false;
  
const findById = function(id){
return items.find(item =>item.id ===id)

}

const addItem = function(name){
try {
item.validateName(name)
let createdItem =item.create(name)
this.items.push(createdItem)
}
catch(error){
  console.log(`${error.message}`)
}
}

const FindAndToggleChecked = function(id){
  let found =this.findById(id)
found.checked =!found.checked 
}

const findAndUpdateName = function(id, newName){
try{
item.validateName(newName);
let found= this.findById(id);
 found.name =newName;
 let updatedItem= found.name;
}
catch(error){
  console.log(`Cannot update name:${error.message}`)
}
}

const findAndDelete = function(id){
  let found= this.findById(id);
this.items =this.items.filter(item => item !== found);

}

  export default {
      items,
      hideCheckedItems,
      findAndUpdateName,
      findAndDelete,
      FindAndToggleChecked,
      findById,
      addItem 

  }