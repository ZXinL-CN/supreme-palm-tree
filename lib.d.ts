
export { }
type GetValueType<T> = T extends Promise<infer R> ? R : never;

type PromiseType = Promise<number[]>

type reslut = GetValueType<PromiseType>

type Pop<T extends unknown[]> = T extends [...infer Rest, infer R] ? [...Rest] : never;

type res = Pop<[1, 2, 3]>

type Shift<T extends unknown[]> = T extends [infer R, ...infer Rest] ? [...Rest] : never;

type res1 = Shift<[1, 2, 3]>

type TrimLeft<Str extends string> = Str extends `${' ' | '\t' | '\r' | '\n'}${infer Rest}` ? TrimLeft<Rest> : Str;

type str1 = TrimLeft<'    abc'>

type TrimRight<Str extends string> = Str extends `${infer Rest}${' ' | '\t' | '\r' | '\n'}` ? TrimRight<Rest> : Str;

type str2 = TrimRight<'abc     '>

type Trim<Str extends string> = TrimRight<TrimLeft<Str>>

type str3 = Trim<'     34dgt43     '>

type Replace<Str extends string,
  From extends string,
  To extends string> = Str extends `${infer Left}${From}${infer Right}`
  ? `${Left}${To}${Right}`
  : Str;

type str4 = Replace<'hello world', 'world', 'typescript'>

type GetParams<Func extends Function> = Func extends (...params: infer Params) => any ? Params : never;

type fun1 = GetParams<(a: number, b: boolean) => void>

type GetReturnType<Func extends Function> = Func extends (...params: any) => infer R ? R : never;

type fun2 = GetReturnType<(a: number, b: boolean) => Promise<number>>
