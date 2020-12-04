const target = { a: 1, b: 2 };
const source = [{ b: 'B', c: 3 } , { a:'A' ,b:'C'}];

const returnedTarget = Object.assign(target, ...source);

console.log(target);
console.log(source);
console.log(returnedTarget);

/**
 * 返回值为目标对象(target) ,  所依目标对象会被修改
 */