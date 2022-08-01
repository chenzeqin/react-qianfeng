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
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
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
