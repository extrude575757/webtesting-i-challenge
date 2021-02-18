const enhancement = require('./enhancer.js');
// test away!


function drinkAll(callback, flavour) {
    if (flavour.durability >= 0) {
      callback(flavour);
    }
  }
  
  describe('drinkAll', () => {
    test('drinks something lemon-flavoured', () => {
      const drink = success;
      const gI = getItm  // jest.fn
      drinkAll(drink, gI);
      expect(drink).toHaveBeenCalled();
    });
  
    test('does not drink something octopus-flavoured', () => {
      const drink = success //jest.fn();
      const gI = getItm
      drinkAll(drink, gI);
      expect(drink).not.toHaveBeenCalled();
    });
  });