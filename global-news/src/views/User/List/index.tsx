import { Button, message, Modal, Space, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import React, { useEffect, useState } from 'react';
import { User } from '../type';
import { DeleteOutlined, ExclamationCircleOutlined, FormOutlined } from '@ant-design/icons';
import { deleteUser, getUserList, patchUser } from '../../../api/user';
import { Role } from '../../Role/type';
import UserForm from './Form';

const UserList: React.FC = () => {

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
              type="primary"
              disabled={row.default}
              icon={<FormOutlined />}
              onClick={() => handleEdit(row)}>
              编辑
            </Button>
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

  /* 新增 编辑 */
  const [visible, setVisible] = useState(false)
  const [user, setUser] = useState<User>()

  const handleAdd = () => {
    setVisible(true)
  }
  const handleEdit = (user: User) => {
    setUser(user)
    setVisible(true)
  }

  const onClose = (needRefresh: boolean = false) => {
    setVisible(false)
    needRefresh && initList()
  }

  // 删除
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

  // 更新状态
  const updateUser = (id: number, user: Partial<User>) => {
    patchUser(id, user).then(res => {
      initList()
      message.success('更新成功')
    })
  }


  return (
    <>
      <Space>
        <Button type="primary" onClick={handleAdd}>新增用户</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(row) => row.id}
        pagination={{ pageSize: 5 }}
      />
      <UserForm
        visible={visible}
        user={user}
        close={onClose}
      ></UserForm>
    </>
  );
};

export default UserList;