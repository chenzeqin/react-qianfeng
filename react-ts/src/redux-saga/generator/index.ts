
export function* test() {
  console.log('1')
  const input1: string = yield 'a'  // 中断函数执行
  console.log('2-valueFromNext:', input1) // A
  const input2: string = yield 'b'// 中断函数执行
  console.log('3-valueFromNext:', input2) // B
}


const g = test();
// 执行一次就会产生一个状态值
// next 参数表示下一次yield表达式接收到的值。第一次调用，没有值可以接收。
const res1 = g.next('第一次调用next传入参数没有用'); // 1
console.log('res1', res1) // {done: false, value: "a"}
const res2 = g.next('A'); // 2
console.log('res2', res2) // {done: false, value: "b"}
const res3 = g.next('B'); // 3
console.log('res3', res3) // {done: true, value: undefined}
const res4 = g.next("C"); // 没有执行的console.log
console.log('res4', res4) // {done: true, value: undefined}