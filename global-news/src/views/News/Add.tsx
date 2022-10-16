import React, { useState, useEffect, useRef } from 'react';
import { Steps, PageHeader, Button, Form, Input, Select } from 'antd';
import styles from './index.module.scss'
import { Category, News } from './news.type';
import { initNews } from './data';
import { addNews, getCategories } from '../../api/news';
import DraftEditor, { EditorRef } from '../../components/DraftEditor';
import { useAuth } from '../../components/Auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const { Step } = Steps;
const { Option } = Select

export default function AddNews() {
  const [currentStep, setCurrentStep] = useState(0)
  const [categories, setCategories] = useState<Category[]>([])
  const [form] = Form.useForm(); // 基本信息
  const [news, setNews] = useState<Partial<News>>({})
  const [content, setContent] = useState<string>('')
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    getCategories().then(res => setCategories(res))
  }, [])

  // 上一步
  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }
  // 下一步
  const nextStep = () => {
    handleStep1()
    handleStep2()
  }
  // 基本信息
  const handleStep1 = () => {
    if (currentStep !== 0) return
    form?.validateFields().then(() => {
      const data = form?.getFieldsValue()
      console.log(data)
      setNews(data)
      setCurrentStep(currentStep + 1)
    })
  }
  // 撰写文章-富文本编辑器
  const editorRef = useRef<EditorRef>(null) // createRef
  const handleStep2 = () => {
    if (currentStep !== 1) return
    if (editorRef && editorRef.current) {
      const html = editorRef.current.getHtml()
      console.log(html)
      if (html.trim() && html.trim() !== '<p></p>') {
        setContent(html)
        setCurrentStep(currentStep + 1)
      }
    }
  }
  // 0:草稿，1： 提交审核
  const save = (auditState: number) => {
    const data: Partial<News> = {
      categoryId: news.categoryId,
      title: news.title,
      auditState, // 0 未审核 1 审核中 3 审核ok 4 审核 rejected
      content: content,
      createTime: Date.now(),
      id: undefined,
      publishState: undefined, // 0 未发布 1 已发布
      publishTime: undefined,
      author: user.username,
      region: user.region,
      roleId: user.role!.id,
      star: 0,
      view: 0,
    }
    addNews(data).then(res => {
      if (auditState === 0) {
        navigate('/news-manage/draft')
      }
      if (auditState === 1) {
        navigate('/audit-manage/list')
      }
    })
  }

  const contentClassName = (step: number) => {
    return currentStep === step ? styles.show : styles.hide
  }

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="撰写新闻"
        subTitle=""
      />
      <Steps current={currentStep}>
        <Step title="基本信息" description="新闻标题，新闻分类" />
        <Step title="新闻内容" subTitle="Left 00:00:08" description="新闻主体内容" />
        <Step title="新闻提交" description="保存草稿或者提交审核" />
      </Steps>
      <div className={styles.content}>
        {/* 基本信息 */}
        <div className={contentClassName(0)}>
          <Form
            name="basic"
            initialValues={{ ...initNews }}
            form={form}
            autoComplete="off"
          >
            <Form.Item
              label="新闻标题"
              name="title"
              rules={[{ required: true, message: 'Please input your title!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="新闻分类"
              name="categoryId"
              rules={[{ required: true, message: 'Please select your Category!' }]}
            >
              <Select>
                {
                  categories.map(item => <Option key={item.id} value={item.value} >{item.title}</Option>)
                }
              </Select>
            </Form.Item>
          </Form>

        </div>
        {/* 新闻内容 富文本 */}
        <div className={contentClassName(1)}>
          <DraftEditor ref={editorRef}></DraftEditor>
        </div>
        {/* 新闻提交 */}
        {/* <div className={contentClassName(2)}>2222</div> */}
      </div>
      <div className={styles.pageFooter}>
        {currentStep === 2 ? <Button type="primary" onClick={() => save(0)}>保存草稿</Button> : null}
        {currentStep === 2 ? <Button type="primary" danger onClick={() => save(1)}>提交审核</Button> : null}
        {currentStep > 0 ? <Button type="primary" onClick={prevStep}>上一步</Button> : null}
        {currentStep < 2 ? <Button type="primary" onClick={nextStep}>下一步</Button> : null}
      </div>
    </div>

  )
}
