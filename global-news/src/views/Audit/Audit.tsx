import { Button, message, Modal, Space, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { Category, News } from '../News/news.type';
import { DeleteOutlined, ExclamationCircleOutlined, FormOutlined } from '@ant-design/icons';
import { getDraftList, deleteDraft, updateNews, getAuditList, getMyAuditList } from '../../api/news';
import { useAuth } from '../../components/Auth/hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
import { auditStateOptions } from '../News/data';

const Audit: React.FC = () => {
  // TODO: 优化 useMemo useCallback
  const columns: ColumnsType<News> = [
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      render(value: string, row: News) {
        return <NavLink to={`/news-manage/preview/${row.id}`}>{value}</NavLink>
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
              onClick={() => handleEdit(row, 2)}>
              审核通过
            </Button>
            <Button
              type="primary"
              danger
              icon={<FormOutlined />}
              onClick={() => handleEdit(row, 3)}>
              审核不通过
            </Button>
          </div>
        )
      }
    },
  ];


  const [list, setList] = useState<News[]>([])
  const { user } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    initList()
  }, [user.username])

  // 获取数据
  const initList = () => {
    if (!user.id) return
    getMyAuditList(user.username!).then(res => {
      setList(res)
    })
  }
  const handleEdit = (row: News, newAuditState: number) => {
    const { auditState } = row
    // 撤销，退回草稿箱
    if (newAuditState) {
      updateNews(row.id + '', {
        auditState: newAuditState
      }).then(() => {
        initList()
        message.success('撤销成功')
      })
    }
    // 审核通过->发布
    if (auditState === 2) {
      updateNews(row.id + '', {
        publishState: 2,
        publishTime: Date.now()
      }).then(() => {
        initList()
        message.success('发布成功')
      })
    }
    if (auditState === 3) {
      navigate(`/news-manage/update/${row.id}`)
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

export default Audit;