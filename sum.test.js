const sum = require('./sum');
test('add 1 + 2 to equal 3', () => {
    expect (sum(1, 2)).toBe(3);
});

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
})

test('object assignment', () => {
  const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})
const myFunction = require('./sum');

test('throws on invalid input', () => {
  expect(() => {
    myFunction(hbh);
  }).toThrow();
})

test("data is peanut butter", done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

// test('the data is peanut butter', () => {
//   return expect(fetcPromise()).resolves.toBe('peanut butter')
// });

// test('the fetch fails with error', () => {
//   return expect(fetcPromise()).rejects.toThrow('error');
// });

// 

// 


// test('staying on the mood of object', ()=> {
//   const video = {
//     play() {
//       return true;
//     },
//   };
//   const spy = jest.spyOn(video, 'play');
//   video.play();

//   expect(spy).toHaveBeenCalled();
//   spy.mockRestore();
// })   


