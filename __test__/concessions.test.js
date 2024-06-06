const { getConcessionByID,calculateTotalFromIDs } = require('../src/concessions.js');
const data = require('../data/concessions.js')

//function 1: getConcessionByID


test('return the concession object by ID', () =>{
    const idToFind = data[0].id
    
    const result = getConcessionByID(data, idToFind);
    
    expect(result).toEqual(data[0]);


})
test('returns null if no concession object is found', () => {
    const idToFind = 'invalidID'; 
   
    const result = getConcessionByID(data, idToFind);
  
    expect(result).toBeNull();
  });





//function 2: calculateTotalFromIDs


//test if the total is correctly added

test('calculates total correctly from given concession IDs', () => {
  const ids = [data[0].id, data[1].id, data[2].id]; 
  
  const result = calculateTotalFromIDs(data, ids);

  expect(result).toBe(data[0].priceInCents + data[1].priceInCents + data[2].priceInCents); 
});



test('returns 0 for empty IDs array', () => {
  const ids = [];

  const result = calculateTotalFromIDs(data, ids);

  expect(result).toBe(0);
});

test('returns 0 if no concession object is found for any ID', () => {
  const ids = ['invalidID1', 'invalidID2'];

  const result = calculateTotalFromIDs(data, ids);

  expect(result).toBe(0);
});
