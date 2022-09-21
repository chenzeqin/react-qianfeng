import { connect } from "dva";
import React, { Component } from "react";

class Cinemas extends Component {
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getList();
    } else {
      console.log("从缓存获取,无需重新发送请求！");
    }
  }
  render() {
    return (
      <div>
        <h2>影院列表</h2>
        <ul>
          {this.props.list.map((item) => {
            return <li key={item.cinemaId}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.maizuo.list,
  };
};

const mapDispatchToProps = {
  getList: () => ({ type: "maizuo/getCinemaList" }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);
