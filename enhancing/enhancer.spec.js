const enhancement = require('./enhancer.js');
// test away!


function drinkAll(callback, flavour) {
    if(!flavour.durability ){
        const durability = flavour.durability
    
    if (durability >= 0) {
      callback(flavour);
    }
    }else{
        console.log('kickrocks')
    }
  }
  
  describe('drinkAll', () => {
    test('drinks something lemon-flavoured', () => {
        const gI =  enhancement.getItm
      const drink = enhancement.success;
        // jest.fn
      drinkAll(drink, gI);
      expect(drink).toHaveBeenCalled();
    });
  
    test('does not drink something octopus-flavoured', () => {
        const gI = enhancement.getItm
        const drink = enhancement.success;
      drinkAll(drink, gI);
      expect(drink).not.toHaveBeenCalled();
    });
  });


