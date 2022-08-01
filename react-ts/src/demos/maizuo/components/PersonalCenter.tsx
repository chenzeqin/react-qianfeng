import React from 'react';

export default function PersonalCenter() {
  function onClick() {
    console.log('onclick');
  }
  return <div onClick={onClick}>PersonalCenter</div>;
}
