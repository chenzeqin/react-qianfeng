import React from 'react';
import propTypes from 'prop-types';

interface SidebarProps {
  bg: string;
}

function Siderbar(props: SidebarProps) {
  console.log(props)
  return (
    <div>
      <ul style={{ backgroundColor: props.bg }}>
        <li>Siderbar,demo: 函数组件props</li>
      </ul>
    </div>
  );
}
// 属性类型检查
Siderbar.propTypes = {
  bg: propTypes.string,
};
// 默认属性
Siderbar.defaultProps = {
  bg: 'pink',
};

export default Siderbar;
