import { Button, Modal, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import React, { useEffect, useState } from 'react';
import { deletePermission, getPermissionTree, updateStatus } from '../../../api/user';
import { Right } from '../type';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';




const PermissionList: React.FC = () => {
  const handleChange = (id: number, pagepermisson: number) => {
    updateStatus(id, pagepermisson).then(res => {
      initList()
    })
  }
  const handleDelete = (id: number) => {
    Modal.confirm({
      title: '是否确定删除',
      icon: <ExclamationCircleOutlined />,
      // content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        deletePermission(id).then(res => {
          initList()
        })
      }
    });

  }
  // TODO: 优化 useMemo useCallback
  const columns: ColumnsType<Right> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名称',
      dataIndex: 'title',
      key: 'name',
    },
    {
      title: 'key',
      dataIndex: 'key',
      key: 'key',
      render: (value: string) => {
        return <Tag color='green'>{value}</Tag>
      }
    },
    {
      title: '操作',
      width: '30%',
      key: 'address',
      render(row: Right) {
        console.log(row)
        return (
          <div>
            <Switch checked={row.pagepermisson === 1} onChange={(checked: boolean) => {
              let pagepermisson = checked ? 1 : 0
              handleChange(row.id, pagepermisson)
            }}></Switch>
            <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(row.id)}>删除</Button>
          </div>
        )
      }
    },
  ];

  const [data, setData] = useState<Right[]>([])
  useEffect(() => {
    initList()
  }, [])

  // 获取数据
  const initList = () => {
    getPermissionTree().then(res => {
      const list = res.map(item => {
        return {
          ...item,
          children: item.children && item.children.length > 0 ? item.children : undefined
        }
      })
      setData(list)
    })
  }
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default PermissionList;