export { }


export function* test() {
  console.log('1')
  yield  // 中断函数执行
  console.log('2')
  yield  // 中断函数执行
  console.log('3')
}


const g = test();
// 执行一次就会产生一个状态值
g.next(); // 1
g.next(); // 2
g.next(); // 3