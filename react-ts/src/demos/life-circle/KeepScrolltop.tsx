import React, { Component, createRef, RefObject } from 'react';
import List from '../todo-list/List';

/* 
  demo: getSnapshotBeforeUpdate
*/

interface StateData {
  list: number[];
}
export default class KeepScrolltop extends Component {
  startIndex: number;
  listRef: RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.startIndex = 0;
    this.listRef = createRef<HTMLDivElement>();
  }
  state: Readonly<StateData> = {
    list: [],
  };
  getSnapshotBeforeUpdate(prevProps: any, preState: StateData) {
    const scrollTop = document.getElementsByClassName(
      'keep-scroll-top-wraper'
    )[0].scrollTop;
    console.log('scrollTop', scrollTop);
    if (preState.list.length < this.state.list.length) {
      const list = this.listRef.current;
      return list!.scrollHeight - list!.scrollTop; // 保存滚出后剩余高度
    }
    // componentDidUpdate会接接收该数据
    return {
      height: scrollTop,
    };
  }
  componentDidUpdate(
    prevProps: any,
    prevState: StateData,
    snapshot: null | number
  ) {
    console.log();
    // 如果我们 snapshot 有值，说明我们刚刚添加了新的 items，
    // 调整滚动位置使得这些新 items 不会将旧的 items 推出视图。
    //（这里的 snapshot 是 getSnapshotBeforeUpdate 的返回值）
    if (snapshot !== null) {
      const list = this.listRef.current;
      list!.scrollTop = list!.scrollHeight - snapshot; // 让scrollTop和更新前一样
    }
  }
  handleAdd = () => {
    const newList: number[] = [];
    for (let i = this.startIndex + 1; i <= this.startIndex + 100; i++) {
      newList.push(i);
    }
    this.startIndex = newList[newList.length - 1];

    this.setState({
      list: [...newList, ...this.state.list],
    });
  };
  render() {
    const { list } = this.state;
    return (
      <div className="keep-scroll-top-wraper" ref={this.listRef}>
        <h4>demo:getSnapshotBeforeUpdate 保持新增数据不滚动 KeepScrolltop</h4>
        <button className="fixed-btn" onClick={this.handleAdd}>
          新增100条数据
        </button>
        <ul>
          {list.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
