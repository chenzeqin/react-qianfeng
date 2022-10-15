import React, { useState, useEffect } from 'react';
import { Steps, PageHeader, Button, Form, Input, Select } from 'antd';
import styles from './index.module.scss'
import { Category, News } from './news.type';
import { initNews } from './data';
import { getCategories } from '../../api/news';
const { Step } = Steps;
const { Option } = Select

export default function AddNews() {
  const [currentStep, setCurrentStep] = useState(0)
  const [categories, setCategories] = useState<Category[]>([])
  const [form] = Form.useForm(); // 基本信息

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
  }
  // 基本信息
  const handleStep1 = () => {
    if (currentStep !== 0) return
    form?.validateFields().then(() => {
      const data = form?.getFieldsValue()
      console.log(data)
      setCurrentStep(currentStep + 1)
    })
  }
  // 保存草稿
  const saveAsDraft = () => { }
  // 提交审核
  const submitReview = () => { }

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
        <Form
          className={contentClassName(0)}
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
            rules={[{ required: true, message: 'Please input your title!' }]}
          >
            <Select>
              {
                categories.map(item => <Option key={item.id} value={item.value} >{item.title}</Option>)
              }
            </Select>
          </Form.Item>
        </Form>
        <div className={contentClassName(1)}>11111</div>
        <div className={contentClassName(2)}>2222</div>
      </div>
      <div className={styles.pageFooter}>
        {currentStep === 2 ? <Button type="primary" onClick={saveAsDraft}>保存草稿</Button> : null}
        {currentStep === 2 ? <Button type="primary" danger onClick={submitReview}>提交审核</Button> : null}
        {currentStep > 0 ? <Button type="primary" onClick={prevStep}>上一步</Button> : null}
        {currentStep < 2 ? <Button type="primary" onClick={nextStep}>下一步</Button> : null}
      </div>
    </div>

  )
}
