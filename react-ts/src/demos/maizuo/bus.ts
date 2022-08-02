/* 发布订阅模式，简易实现 */

type CB = (data: any) => void
interface Bus {
  list: Record<string, CB[]>
  subscribers: (type: string, cb: CB) => void
  pushlish: (type: string, data: any) => void
  clear: (type: string) => void
}

export const bus: Bus = {
  list: {},
  subscribers(type: string, cb: CB) {
    if (this.list[type]) {
      this.list[type].push(cb)
    } else {
      this.list[type] = [cb]
    }
  },
  pushlish(type: string, data: any) {
    const cbs = this.list[type] || []
    cbs.forEach(cb => {
      cb.call(this, data)
    })
  },
  clear(type: string) {
    this.list[type] = []
  }
}