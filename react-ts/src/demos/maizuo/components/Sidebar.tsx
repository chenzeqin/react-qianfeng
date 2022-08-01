import React from 'react';
import propTypes from 'prop-types';

interface SidebarProps {
  bg: string;
}

function Siderbar(props: SidebarProps) {
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

Siderbar.propTypes = {
  bg: propTypes.string,
};
Siderbar.defaultProps = {
  bg: 'pink',
};

export default Siderbar;
