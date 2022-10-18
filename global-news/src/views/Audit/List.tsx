import { Button, message, Modal, Space, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { Category, News } from '../News/news.type';
import { DeleteOutlined, ExclamationCircleOutlined, FormOutlined } from '@ant-design/icons';
import { getDraftList, deleteDraft, updateNews, getAuditList } from '../../api/news';
import { useAuth } from '../../components/Auth/hooks/useAuth';
import { NavLink, useNavigate } from 'react-router-dom';
import { auditStateOptions } from '../News/data';

const AuditList: React.FC = () => {
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
      title: '审核状态',
      dataIndex: 'auditState',
      key: 'auditState',
      render(value: number) {
        const stateOption = auditStateOptions.find(item => item.value === value)
        if (stateOption) return stateOption.name
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
              {buttonText(row.auditState)}
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
  }, [user.id])

  // 获取数据
  const initList = () => {
    if (!user.id) return
    getAuditList(user.id).then(res => {
      setList(res)
    })
  }
  const buttonText = (auditState: number) => {
    if (auditState === 1) {
      return '撤销'
    }
    if (auditState === 2) {
      return '发布'
    }
    return '修改'
  }
  const handleEdit = (row: News) => {
    const { auditState } = row
    // 撤销，退回草稿箱
    if (auditState === 1) {
      updateNews(row.id + '', {
        auditState: 0
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

export default AuditList;