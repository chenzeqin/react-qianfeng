import React, { Component, useState } from 'react';
import styled from 'styled-components';

interface Props {
  color?: string;
}
const StyledDiv = styled.div`
  background-color: ${(props: Props) => props.color};
  font-weight: 600;
  line-height: 30px;
  border: 2px solid #ccc;
  /* 支持scss语法 */
  .list {
    text-align: center;
  }
  li {
    color: #fff;
  }
`;

const StyledInput = styled.input`
  background: blue;
  color: #fff;
`;

export {
  StyledDiv,
  StyledInput,
};
