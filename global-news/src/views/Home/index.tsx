import React, { useEffect, useState } from 'react'
import { Row, Col, Card, List, Avatar } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { useAuth } from '../../components/Auth/hooks/useAuth';
import { getMostStarNews, getMostViewNews } from '../../api/news';
import { News } from '../News/news.type';
import { NavLink } from 'react-router-dom';
import LineChart from './LineChart';
const { Meta } = Card;

export default function Home() {
  const { user } = useAuth()
  const [mostViewList, setMostViewList] = useState<News[]>([])
  const [mostStatList, setMostStarList] = useState<News[]>([])
  useEffect(() => {
    getMostViewNews().then(res => setMostViewList(res))
    getMostStarNews().then(res => setMostStarList(res))
  }, [])
  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={8}>
          <Card title="用户最常浏览" style={{ width: '100%' }}>
            <List
              bordered
              dataSource={mostViewList}
              renderItem={item => <List.Item><NavLink to={`/news-manage/preview/${item.id}`}>{item.title}</NavLink></List.Item>}
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card title="用户点赞最多" style={{ width: '100%' }}>
            <List
              bordered
              dataSource={mostStatList}
              renderItem={item => <List.Item><NavLink to={`/news-manage/preview/${item.id}`}>{item.title}</NavLink></List.Item>}
            />
          </Card>
        </Col>
        <Col className="gutter-row" span={8}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={user.username}
              description={<span>{user.region}-{user.role?.roleName}</span>}
            />
          </Card>
        </Col>
      </Row>
      <Row >
        <Col className="gutter-row" span={24}>
          <LineChart></LineChart>
        </Col>
      </Row>
    </div>
  )
}
