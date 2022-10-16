import React, { useState, useEffect, forwardRef, ForwardedRef, useImperativeHandle } from 'react'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

interface EditorProps {
  initHtml?: string
}

export interface EditorRef {
  getHtml: () => string
  setHtml: (text: string) => void
}

function DraftEditor(props: EditorProps, editorRef: ForwardedRef<EditorRef>) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  useEffect(() => {
    setHtml(props.initHtml)
  }, [props.initHtml])

  const onEditorStateChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState)
  }

  // 从编辑器获取html
  const getHtml = () => {
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    return html
  }

  // 把html设置到编辑器
  const setHtml = (html?: string) => {
    if (!html) return

    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState)
    }
  }

  // 暴漏内部方法给外部组件
  // useImperativeHandle 可以让你在使用 ref 时自定义暴露给父组件的实例值。在大多数情况下，应当避免使用 ref 这样的命令式代码
  useImperativeHandle(
    editorRef,
    () => {
      return {
        getHtml,
        setHtml
      }
    }
  )


  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      {/* <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      /> */}
    </div>
  )
}

export default forwardRef(DraftEditor)