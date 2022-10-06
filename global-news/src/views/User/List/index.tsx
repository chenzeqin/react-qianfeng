import { Button, message, Modal, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import React, { useEffect, useState } from 'react';
import { User } from '../type';
import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { deleteUser, getUserList, patchUser } from '../../../api/user';
import { Role } from '../../Role/type';


const UserList: React.FC = () => {
  const handleDelete = (row: User) => {
    const { id } = row
    Modal.confirm({
      title: '是否确定删除',
      icon: <ExclamationCircleOutlined />,
      // content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        deleteUser(id).then(res => {
          initList()
        })
      }
    });

  }
  // TODO: 优化 useMemo useCallback
  const columns: ColumnsType<User> = [
    {
      title: '区域',
      dataIndex: 'region',
      key: 'region',
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      key: 'role',
      render(role: Role) {
        return role?.roleName
      }
    },
    {
      title: '用户名称',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      key: 'roleState',
      render(value: boolean, row: User) {
        return (
          <Switch checked={value} disabled={row.default} onChange={(checked: boolean) => {
            updateUser(row.id, { roleState: checked })
          }}></Switch>
        )

      }
    },
    {
      title: '操作',
      width: '30%',
      render(row: User) {
        return (
          <div>
            <Button
              danger
              disabled={row.default}
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(row)}>
              删除
            </Button>
          </div>
        )
      }
    },
  ];

  const updateUser = (id: number, user: Partial<User>) => {
    patchUser(id, user).then(res => {
      console.log(res);
      initList()
      message.success('更新成功')
    })
  }

  const [data, setData] = useState<User[]>([])
  useEffect(() => {
    initList()
  }, [])

  // 获取数据
  const initList = () => {
    getUserList().then(res => {
      setData(res)
    })
  }
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(row) => row.id}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
};

export default UserList;