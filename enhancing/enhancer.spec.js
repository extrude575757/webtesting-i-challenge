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
    //   const drink = enhancement.success;
    //     // jest.fn
    //   drinkAll(drink, gI);
    //   expect(drink).toHaveBeenCalled();

 


        const spy = jest.spyOn(enhancement, 'success');
        const isPlaying = enhancement.success(gI);


        drinkAll(isPlaying, gI);

        expect(spy).toHaveBeenCalled();
        // expect(isPlaying).toBe(true);
        // expect(isPlaying).toHaveBeenCalled();
        spy.mockRestore();

    });
  
    test('enhancements callback is called NOT CALLED', () => {
        const gI = enhancement.getItm
        const drink = enhancement.success;
      drinkAll(drink, gI);
      expect(drink).not.toHaveBeenCalled();
    });
  });


