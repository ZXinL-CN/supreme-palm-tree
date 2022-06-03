export { }
// keyof 和 查找类型

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"

type K2 = keyof Person[]; // "length" | "push" | "pop" | "concat" | ...

type K3 = keyof { [x: string]: Person }; // string

// 查找类型，类似于JavaScript中元素访问

type P1 = Person['name']; // string
type P2 = Person['name' | 'age']; //string | number
type P3 = string['charAt']; // (pos: number) => string
type P4 = string[]['push']; // (...items: string[]) => number
type P5 = string[][0]; // string

// 可以将此模式与类型系统的其他部分一起使用，以获取类型安全的查找。
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]; // Inferred type is T[K]
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  obj[key] = value
}

let x = { foo: 10, bar: 'hello' };
let foo = getProperty(x, 'foo'); // number
let bar = getProperty(x, "bar"); // string

let oops = getProperty(x, "wargarbl"); // Error! "wargarbl" is not "foo" | "bar"
setProperty(x, "foo", "string"); // Error!, string expected number