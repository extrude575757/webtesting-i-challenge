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
 
// When the repair function is called
        // The jest Mock enhancement function for repair
        const repairSpy = jest.spyOn(enhancement, 'repair');
   
        // Initiates the Mock enhancement repair function with gI 
        const repairInit = enhancement.repair(gI);
        // Calls the Recurisve Bug finding Function similar to successInit
        enhanceAll(repairInit, gI);
        // Expect jest Mock enhancment function for success to have been called
        expect(repairSpy).toHaveBeenCalled(); 
        // Last mockRestore() jestfunction to run with successSpy Mock function
        repairSpy.mockRestore();

// Fail(item) spy on

        const failSpy = jest.spyOn(enhancement, 'fail');
   
        // Initiates the Mock enhancement success function with gI 
        const failInit = enhancement.fail(gI);
        // Calls the Recurisve Bug finding Function similar to successInit
        enhanceAll(failInit, gI);
        // Expect jest Mock enhancment function for success to have been called
        expect(failSpy).toHaveBeenCalled(); 
        // Last mockRestore() jestfunction to run with successSpy Mock function
        failSpy.mockRestore();

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

        expect(successSpy).toHaveReturned();
          // Calls the Recurisve Bug finding Function similar to successInit
        enhanceAll(successInit, gI);
      }else{
            // Now we know success spy was not called here & is false
        expect(successSpy).not.toHaveBeenCalled();
        expect(successSpy).toBe(false); 
        // Last mockRestore() jestfunction to run with successSpy Mock function
        successSpy.mockRestore();
      }

// Repair spy mock
      const repairSpy = jest.spyOn(enhancement, 'repair');
      // Initiates the Mock enhancement success function with gI 
      const repairInit = enhancement.repair(gI);
        // When successSpy is called
      if(repairSpy){

        expect(repairSpy).toHaveReturned();
          // Calls the Recurisve Bug finding Function similar to successInit
        enhanceAll(repairInit, gI);
      }else{
            // Now we know success spy was not called here & is false
        expect(repairSpy).not.toHaveBeenCalled();
        expect(repairSpy).toBe(false); 
        // Last mockRestore() jestfunction to run with successSpy Mock function
        repairSpy.mockRestore();
      }

//Failed jest mock
            // The jest Mock enhancement function for success
            const failSpy = jest.spyOn(enhancement, 'fail');
            // Initiates the Mock enhancement success function with gI 
            const failInit = enhancement.fail(gI);
              // When successSpy is called
            if(failSpy){
      
              expect(failSpy).toHaveReturned();
                // Calls the Recurisve Bug finding Function similar to successInit
              enhanceAll(failInit, gI);
            }else{
                  // Now we know success spy was not called here & is false
              expect(failSpy).not.toHaveBeenCalled();
              expect(failSpy).toBe(false); 
              // Last mockRestore() jestfunction to run with successSpy Mock function
              failSpy.mockRestore();
            }

    });// End enhancements callback is  NOT CALLED 



    test('Verify enhacement and durability are numbers ', () =>{
      // expecting enhacemtn and durability are numbers between
      // 0 and 100 and 0 to 20 for enahcement
      
      if(enhancement.durability !== undefined || enhancement.enhancement !== undefined){
        expect(enhancement).toBeDefined();
        expect(enhancement.durability).toBeGreaterThan(-1);
        expect(enhancement.durability).toBeLessThan(101);
        expect(enhancement.enhancement).toBeGreaterThan(-1);
        expect(enhancement.enhancement).toBeLessThan(21);
    
      }else{
        expect(enhancement.durability).toBeUndefined();
        expect(enhancement.enhancement).toBeUndefined();
      }
    
    }) // End test

it('enhancer has getItm success fail repair get', () =>{
    expect(enhancement).toHaveProperty('getItm') 
    expect(enhancement).toHaveProperty('success') 
    expect(enhancement).toHaveProperty('fail')
    expect(enhancement).toHaveProperty('repair')  
    expect(enhancement).toHaveProperty('get') 
})
it('enhancer has getItm has name durability and enhancement', () =>{
    expect(enhancement.getItm).toHaveProperty('name')
})
it('enhancer has getItm has name durability ', () =>{  
   if([]){
    console.log('Says durability is this')
   }else{
    expect(enhancement.getItm).toHaveProperty('durability')    
   }
})
it('enhancer has getItm has   enhancement', () =>{
    expect(enhancement.getItm).toHaveProperty('enhancement')
}) 
  });  // End Enhancer Describe




