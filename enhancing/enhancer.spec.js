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
    test('enhancements callback is called', () => {
        const gI =  enhancement.getItm
      const drink = enhancement.success;
        // jest.fn
      drinkAll(drink, gI);
      expect(drink).toHaveBeenCalled();
    });
  
    test('enhancements callback is called NOT CALLED', () => {

        const spy = jest.spyOn(enhancement, 'success', 'getItm'); // we pass 'get'
       
        const gI = enhancement.getItm
        const drink = enhancement.success;
      drinkAll(drink, gI);
      expect(drink).not.toHaveBeenCalled();


         const isPlaying = spy.success;
      
        expect(spy).not.toHaveBeenCalled();
        expect(isPlaying).toBe(true);
      
        spy.mockRestore();



    });
  });


