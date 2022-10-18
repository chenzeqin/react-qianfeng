import { Button, message, Modal, Space, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { Category, News } from '../News/news.type';
import { DeleteOutlined, ExclamationCircleOutlined, FormOutlined } from '@ant-design/icons';
import { getDraftList, deleteDraft, updateNews, getAuditList, getPublishList } from '../../api/news';
import { useAuth } from '../../components/Auth/hooks/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { auditStateOptions, publishStateOptions } from '../News/data';

const PublishList: React.FC = () => {
  // TODO: 优化 useMemo useCallback
  const columns: ColumnsType<News> = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render(value: string, row: News) {
        return <NavLink to={`/news-manage/preview/${row.id}`}>{value}</NavLink>
      }
    },
    {
      title: '发布状态',
      dataIndex: 'publishState',
      key: 'publishState',
      render(value: number) {
        const option = publishStateOptions.find(item => item.value === value)
        if (option) return option.name
        return '未知状态'
      }
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      render(value: Category) {
        if (value) {
          return value.title
        }
        return '未知分类'
      }
    },
    {
      title: '操作',
      width: '30%',
      render(row: News) {
        return (
          <div>
            <Button
              type="primary"
              icon={<FormOutlined />}
              onClick={() => handleEdit(row)}>
              {buttonText(row.publishState)}
            </Button>
          </div>
        )
      }
    },
  ];


  const [list, setList] = useState<News[]>([])
  const { user } = useAuth()
  const { pathname } = useLocation()
  let publishState = 1 // 待发布
  if (pathname.includes('/published')) publishState = 2 // 已经发布
  if (pathname.includes('/sunset')) publishState = 3 // 已经下线

  useEffect(() => {
    initList()
  }, [user.username, pathname])

  // 获取数据
  const initList = () => {
    if (!user.username) return
    getPublishList(user.username, publishState).then(res => {
      setList(res)
    })
  }
  const buttonText = (publishState: number) => {
    // 待发布
    if (publishState === 1) {
      return '发布'
    }
    // 已发布
    if (publishState === 2) {
      return '下线'
    }
    // 已下线
    if (publishState === 3) {
      return '发布'
    }
  }
  const handleEdit = (row: News) => {
    const { publishState } = row
    if (publishState === 1) {
      updateNews(row.id + '', {
        publishState: 2,
        publishTime: Date.now()
      }).then(() => {
        initList()
        message.success('发布成功')
      })
    }
    if (publishState === 2) {
      updateNews(row.id + '', {
        publishState: 3,
      }).then(() => {
        initList()
        message.success('下线成功')
      })
    }
    if (publishState === 3) {
      updateNews(row.id + '', {
        publishState: 2,
      }).then(() => {
        initList()
        message.success('发布成功')
      })
    }
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={list}
        rowKey={(row) => row.id}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default PublishList;