module.exports = {
  success,
  fail,
  repair,
  get,getItm
};

function getItm(){
  const i ={
    name:"Fly",durability:2,enhancement:3  
  }
  return i;
}
/*
### When enhancement succeeds
- The item's enhancement increases by 1.
- If the item enhancement level is 20, the enhancement level is not changed.
- The durability of the item is not changed.
*/
function success(item) {
  if(item === undefined){
    item = getItm();
  }
  if(item.enhancement >= 20){
    console.log('All is well with your success ', item)
  }else{
    item.enhancement =+ 1;
  }
  return { ...item };
}

/*
### When enhancement fails

- If the item's enhancement is less than 15, the durability of the item is decreased by 5.
- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
*/

function fail(item) {
  if(item.enhancement < 15){
    item.durability =- 5;

  }else{
    item.durability =- 10;
    if( item.enhancement > 16){
      item.enhancement =- 1;
    }
  }
  return { ...item };
}
/*
- a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100. This method is the simplest of the three and would be a **good starting point** on this project.
*/
function repair(item) {
  item.durability=100;
  return { ...item };
}

/*
### Task 3: Stretch Goals

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

- Add a `get()` method to the `enhancer` object that takes an `item` and **returns a new item** with the `name` property modified according to the following rules:
  - if the enhancement level is 0, the the name is not modified.
  - if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".
- Design and build a Web Application to test the enhancing module you implemented for the MVP.
- Work on [this repository for extra practice testing JavaScript Functions](https://github.com/LambdaSchool/Testing).

*/

function get(item) {
  return { ...item };
}
