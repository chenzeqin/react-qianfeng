import React, { Component } from 'react';
import './index.css';
import Tabbar from '../router-pages/components/Tabbar';
import HomeRouter from '../router-v5';
// import { store } from '../redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../redux/index';

const mapState = (state: RootState) => ({
  show: state.tabReducer.show,
});
// 返回connector是一个函数
const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  // 组件的其他属性...
  // backgroundColor: string;
}

class Maizuo extends Component<Props> {
  componentDidMount() {
    // store.subscribe(() => {
    //   this.setState({});
    // });
  }

  render() {
    console.log('index props', this.props);
    // const {show} = store.getState.tabReducer
    const show = this.props.show;
    return <HomeRouter>{show && <Tabbar></Tabbar>}</HomeRouter>;
  }
}

export default connector(Maizuo);
