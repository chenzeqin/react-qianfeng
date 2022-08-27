
export function* test() {
  console.log('1')
  yield 'a'  // 中断函数执行
  console.log('2')
  yield 'b'// 中断函数执行
  console.log('3')
}


const g = test();
// 执行一次就会产生一个状态值
const res1 = g.next(); // 1
console.log('res1', res1) // {done: false, value: "a"}
const res2 = g.next(); // 2
console.log('res2', res2) // {done: false, value: "b"}
const res3 = g.next(); // 3
console.log('res3', res3) // {done: true, value: undefined}
const res4 = g.next(); // 没有执行的console.log
console.log('res4', res4) // {done: true, value: undefined}