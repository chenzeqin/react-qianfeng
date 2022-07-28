import React, { ForwardedRef, RefObject } from 'react';

const InputAutoFocusRFC = React.forwardRef((props, ref:ForwardedRef<HTMLInputElement>) => {

  return <input ref={ref} defaultValue="test ref 转发"></input>;
});

export default InputAutoFocusRFC;
