/* 自动执行器（功能类似promise链式调用） */

function* gen() {
  const data1: string = yield getData('data1')
  const data2: string = yield getData(data1 + 'data2')
  yield getData(data2 + 'data3')
}

export function run<T = any>(gen: () => Generator<Promise<T>>) {
  const g = gen()

  function next(data?: T) {
    const res = g.next(data)

    // value是Promise
    if (res.done) {
      console.warn(`最终结果：${data}`)
      return data
    }
    // promiss fullfill才执行下一个next,并把结果传入到下一步
    res.value.then(res => {
      next(res)
    })
  }

  next()
}

// 模拟数据请求
function getData(data: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 1000)
  })
}

run<string>(gen)