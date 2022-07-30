import React from 'react';

export default function InnerHtml() {
  const html = `<div>
   <p>danerouslySetInnerHTML</p>
   <p>用于替代innerHtml,类似vue中的v-html</p>
  </div>`;

  function createMarkup() {
    return {
      __html: html,
    };
  }
  return (
    <div>
      <h3>3. dangerouslySetInnerHTML</h3>
      {/* 只能写在空标签，不能有多个child */}
      <p dangerouslySetInnerHTML={createMarkup()}></p>
    </div>
  );
}
