import React, { Component, ReactNode } from 'react';
import './index.css';
import AppTabbar from '../router-pages/components/AppTabbar';
// import { store } from '../redux';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../redux/index';
import { Route, Redirect, Switch } from 'react-router-dom';
import Films from '../router-pages/films';
import Cinemas from '../router-pages/cinemas';
import Center from '../router-pages/center';
import NotFound from '../router-pages/404';
import Detail from '../router-pages/films/Detail';
import Login from '../router-pages/Login';
import City from '../router-pages/City.ts';
import Search from '../router-pages/cinemas/Search';

const mapState = (state: RootState) => ({
  // show: state.tabReducer.show,
  // 获取immutable数据
  show: state.tabReducer.get('show'),
});
// 返回connector是一个函数
const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {
  // 组件的其他属性...
  // backgroundColor: string;
  children?: ReactNode;
}

function hasAuth() {
  return localStorage.getItem('token');
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
    return (
      <div className="maizuo">
        {this.props.children}
        <Switch>
          {/* 注意： 嵌套路由，不要写 exact 精确匹配 */}
          <Route path="/maizuo/films" component={Films}></Route>
          <Route path="/maizuo/cinemas" component={Cinemas} exact></Route>
          <Route path="/maizuo/cinemas/search" component={Search}></Route>
          {/* 路由拦截： react没有路由拦截的概念，TODO: 需要自己封装拦截组件 */}
          <Route
            path="/maizuo/center"
            render={(props) => {
              // 通过props可以获取路由组件属性
              return hasAuth() ? (
                <Center {...props}></Center>
              ) : (
                <Redirect to="/maizuo/login"></Redirect>
              );
            }}
          ></Route>
          <Route path="/maizuo/detail/:id" component={Detail}></Route>
          {/* <Route path="/detail" component={Detail}></Route> */}

          <Route path="/maizuo/login" component={Login}></Route>
          <Route path="/maizuo/city" component={City}></Route>
          {/* 路由重定向 */}
          {/* exact： 精确匹配 */}
          <Redirect from="/maizuo" to="/maizuo/films" exact></Redirect>
          {/* 404 路由兜底页面 */}
          <Route component={NotFound}></Route>
        </Switch>
        {show && <AppTabbar></AppTabbar>}
      </div>
    );
  }
}

export default connector(Maizuo);
