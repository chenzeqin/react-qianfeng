import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Descriptions, PageHeader, Space } from 'antd';
import { getNews } from '../../../api/news';
import { News, Option } from '../news.type';
import { auditStateOptions, initNews, publishStateOptions } from '../data';
import styles from '../index.module.scss'

export default function DraftPreview() {
  const { id } = useParams()
  const [news, setNews] = useState<Partial<News>>({ ...initNews })

  useEffect(() => {
    if (!id) return
    getNews(id).then(res => {
      console.log(res)
      setNews(res)
    })
  }, [id])

  const getNameByValue = (options: Option[], value?: number) => {
    const option = options.find(item => item.value === value)
    if (option) {
      return option.name
    }
    return ''
  }

  const parseTime = (timestamp?: number) => {
    return timestamp ? new Date(timestamp).toLocaleDateString() : ''
  }


  return (
    <>
      <PageHeader
        ghost={false}
        title={news.title}
        subTitle={news.category?.title}
      >
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="创建者">{news.author}</Descriptions.Item>
          <Descriptions.Item label="创建时间">{parseTime(news.createTime)}</Descriptions.Item>
          <Descriptions.Item label="发布时间">{parseTime(news.publishTime)}</Descriptions.Item>
          <Descriptions.Item label="区域">{news.region}</Descriptions.Item>
          <Descriptions.Item label="审核状态">{getNameByValue(auditStateOptions, news.auditState)}</Descriptions.Item>
          <Descriptions.Item label="发布状态">{getNameByValue(publishStateOptions, news.publishState)}</Descriptions.Item>
          <Descriptions.Item label="访问数量">{news.view}</Descriptions.Item>
          <Descriptions.Item label="点赞数量">{news.star}</Descriptions.Item>
        </Descriptions>
      </PageHeader>
      <div className={styles.newsContent} dangerouslySetInnerHTML={{
        __html: news.content || ''
      }}>
      </div>
    </>
  )
}
