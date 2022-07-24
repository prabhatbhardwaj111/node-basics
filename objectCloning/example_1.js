const obj = { one: 1, two: 2 };

const obj2 = obj;

console.log(
  obj, // {one: 1, two: 2};
  obj2, // {one: 1, two: 2};
);

//Now I assigning new value to obj2

obj2.three=3;


console.log(
    obj, // { one: 1, two: 2, three: 3 }
    obj2, // { one: 1, two: 2, three: 3 }
);

const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = { ...food };

cloneFood.tea='Hii';

console.log(cloneFood);
console.log(food);

//https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects/