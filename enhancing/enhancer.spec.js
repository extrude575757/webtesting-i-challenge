const enhancement = require('./enhancer.js');
// test away!

/*    enhanceAll(cb,eObj)
    Recursive Callback Function 
        @ Callback - the enhancement function ie success
        @ enhancer - The enhancement object ie returning from getItm
*/
function enhanceAll(callback, enhancer) {
    // When Enhancer Object Does not exist
    if(enhancer === null ){
        const durability = enhancer.durability
        // If not null & if statement is wrong
            if (enhancer !== null) {
            // Pinpoints a bug when true because durability should not have a value here
            // Place the enhancer in the callback to init success 
            callback(enhancer);
            }
            //Else we will Test for when null
    }else{
        console.log('Enhanceing As Normal')
    }
  }
  
  describe('enhanceAll as describe', () => {
//All The Enhancement callbacks
    test('enhancements callback is called with success spyon mock func', () => {

        // place the enhancement obj in gI
        const gI =  enhancement.getItm
        // The jest Mock enhancement function for success
        const successSpy = jest.spyOn(enhancement, 'success');
        // Initiates the Mock enhancement success function with gI 
        const successInit = enhancement.success(gI);
        // Calls the Recurisve Bug finding Function similar to successInit
        enhanceAll(successInit, gI);
        // Expect jest Mock enhancment function for success to have been called
        expect(successSpy).toHaveBeenCalled(); 
        // Last mockRestore() jestfunction to run with successSpy Mock function
        successSpy.mockRestore();

    }); // End Enhancements Call is called 
  
    test('enhancements callback is  NOT CALLED for success spyon mock func', () => {
 
      // place the enhancement obj in gI
      const gI =  enhancement.getItm
      // The jest Mock enhancement function for success
      const successSpy = jest.spyOn(enhancement, 'success');
      // Initiates the Mock enhancement success function with gI 
      const successInit = enhancement.success(gI);
        // When successSpy is called
      if(successSpy){
          // Calls the Recurisve Bug finding Function similar to successInit
        enhanceAll(successInit, gI);
      }else{
            // Now we know success spy was not called here & is false
        expect(successSpy).not.toHaveBeenCalled();
        expect(successSpy).toBe(false); 
        // Last mockRestore() jestfunction to run with successSpy Mock function
        successSpy.mockRestore();
      }

    });// End enhancements callback is  NOT CALLED 
  });  // End Enhancer Describe


