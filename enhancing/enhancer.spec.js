const enhancement = require('./enhancer.js');
// test away!


function drinkAll(callback, enhancer) {
    if(!enhancer.durability ){
        const durability = enhancer.durability
    
    if (durability >= 0) {
      callback(enhancer);
    }
    }else{
        console.log('kickrocks')
    }
  }
  
  describe('drinkAll', () => {
    test('enhancements callback is called', () => {

    //   const drink = enhancement.success;
    //     // jest.fn
    //   drinkAll(drink, gI);
    //   expect(drink).toHaveBeenCalled();

 

        const gI =  enhancement.getItm
        const successSpy = jest.spyOn(enhancement, 'success');
        const successInit = enhancement.success(gI);


        drinkAll(successInit, gI);

        expect(successSpy).toHaveBeenCalled();
        // expect(isPlaying).toBe(true);
        // expect(isPlaying).toHaveBeenCalled();
        successSpy.mockRestore();

    });
  
    test('enhancements callback is called NOT CALLED', () => {
        // const gI = enhancement.getItm
    //     const drink = enhancement.success;
    //   drinkAll(drink, gI);
    //   expect(drink).not.toHaveBeenCalled();

        
      const gI =  enhancement.getItm
      const successSpy = jest.spyOn(enhancement, 'success');
      const successInit = enhancement.success(gI);




      if(successSpy){
        drinkAll(successInit, gI);
      }else{
        expect(successSpy).not.toHaveBeenCalled();
        expect(successSpy).toBe(false);
        // expect(isPlaying).toHaveBeenCalled();
        successSpy.mockRestore();
      }

    });
  });


