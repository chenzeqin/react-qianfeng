import React, { useEffect, useState, useMemo } from 'react'
import { getNews, getNewsList } from '../../api/news'
import { News } from '../News/news.type'
import { Row, Col, Card, List, Avatar, Drawer, PageHeader } from 'antd'
import { NavLink } from 'react-router-dom'
import { groupBy } from 'lodash'

export default function ClientPage() {
  const [list, setList] = useState<News[]>([])

  useEffect(() => {
    getNewsList().then(res => {
      setList(res)
    })
  }, [])

  const listGroup = useMemo(() => {
    return groupBy(list, item => item.category?.title)
  }, [list])

  return (
    <div>
      <PageHeader
        ghost={false}
        title="全球大新闻"
        subTitle="查看新闻"
      ></PageHeader>
      <Row gutter={16}>
        {
          Object.keys(listGroup).map(item => {
            return (
              <Col className="gutter-row" span={8} key={item}>
                <Card title={item} bordered={true} hoverable={true} style={{ width: '100%' }}>
                  <List
                    bordered
                    dataSource={listGroup[item]}
                    renderItem={item => <List.Item><NavLink to={`/news-detail/${item.id}`}>{item.title}</NavLink></List.Item>}
                  />
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </div>
  )
}
