import React, { Component, ReactElement, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';

export default function PortalDemo() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h3>Portals demo</h3>
      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹窗
      </button>
      {visible && (
        <Dialog>
          弹窗内容,检查元素可以看到，渲染到指定div节点（#modal-root）中
        </Dialog>
      )}
    </div>
  );
}


/* 弹窗组件 */
const modelRoot = document.getElementById('modal-root');
interface DialogProps {
  children?: ReactNode;
}
class Dialog extends Component<DialogProps> {
  el: null | HTMLDivElement = null;

  constructor(props: DialogProps) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modelRoot?.appendChild(this.el!);
  }

  componentWillUnmount() {
    modelRoot?.removeChild(this.el!);
  }

  render(): React.ReactNode {
    //  插入到this.el 或者可以直接插入到document.body
    return createPortal(this.props.children || <></>, this.el!);
  }
}
