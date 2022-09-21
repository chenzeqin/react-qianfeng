import React from "react";
import { connect } from "dva";
import styles from "./App.css";
import TabBar from "../components/TabBar";
import { withRouter } from "dva/router";

function App(props) {
  console.log(props);
  return (
    <div className={styles.app}>
      <header>
        欢迎来到卖座网
        <button
          onClick={() => {
            console.log(props);
            localStorage.removeItem("token");
            props.history.push("/login");
          }}
        >
          退出登陆
        </button>
      </header>
      <div className={styles.main}>{props.children}</div>
      {props.tabVisible && <TabBar></TabBar>}
    </div>
  );
}

App.propTypes = {};

const mapStateToProps = (state) => {
  console.log(state); // rootState
  return {
    tabVisible: state.maizuo.tabVisible,
  };
};

export default connect(mapStateToProps)(withRouter(App));
