import { Button, Modal, Switch, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import React, { useEffect, useState } from 'react';
import { Role } from '../type';
import { DeleteOutlined, ExclamationCircleOutlined, FormOutlined } from '@ant-design/icons';
import { deleteRole, getRoleList } from '../../../api/role';




const RoleList: React.FC = () => {
  const handleEdit = () => {

  }
  const handleDelete = (id: number) => {
    Modal.confirm({
      title: '是否确定删除',
      icon: <ExclamationCircleOutlined />,
      // content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        deleteRole(id).then(res => {
          initList()
        })
      }
    });

  }
  // TODO: 优化 useMemo useCallback
  const columns: ColumnsType<Role> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '名称',
      dataIndex: 'roleName',
      key: 'roleName',
    },
    {
      title: '类型',
      dataIndex: 'roleType',
      key: 'roleType',
    },
    {
      title: '操作',
      width: '30%',
      key: 'address',
      render(row: Role) {
        console.log(row)
        return (
          <div style={{ minWidth: '200px' }}>
            <Button type="primary" icon={<FormOutlined />} onClick={() => handleDelete(row.id)}>编辑</Button>
            <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(row.id)}>删除</Button>
          </div>
        )
      }
    },
  ];

  const [data, setData] = useState<Role[]>([])
  useEffect(() => {
    initList()
  }, [])

  // 获取数据
  const initList = () => {
    getRoleList().then(res => {
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

export default RoleList;