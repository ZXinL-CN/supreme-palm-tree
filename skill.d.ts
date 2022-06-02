export { }

type res = Record<'xin' | 'liang', 'xxx'>

type MyRecord<K, T> = { [P in K]: T }
// 不能将类型“K”分配给类型“string | number | symbol”。ts(2322)

type res1 = keyof any
type MyRecord2<K extends keyof any, T> = { [P in K]: T }