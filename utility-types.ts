export { }
// TypeScript 实用程序类型
// Typescript 提供了一些工具类型来辅助进行常见的类型转换，这些类型全局可用。
// 参考文档：https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype

// Partial<Type>
// 用于构造一个Type下面的所有属性都设置为可选的类型，这个工具类型会返回代表给定的一个类型的子集的类型。

interface Todo {
  title: string;
  description: string;
}

function updateToDo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'open',
  description: 'hello world'
}

const todo2 = updateToDo(todo1, { description: 'hello world!!!' })


// Required<Type>
// 用于构造一个Type下面的所有属性全都设置为必填的类型，这个工具类型跟 Partial 相反。

interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }
const obj2: Required<Props> = { a: 5 }