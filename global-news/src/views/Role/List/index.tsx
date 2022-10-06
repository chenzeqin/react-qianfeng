import { Button, Modal, Tree, Table, Tag, message } from 'antd';
import type { TreeProps } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import React, { useEffect, useState } from 'react';
import { Role } from '../type';
import { DeleteOutlined, ExclamationCircleOutlined, FormOutlined } from '@ant-design/icons';
import { deleteRole, getRoleList, patchRole } from '../../../api/role';
import { Right } from '../../Permission/type';
import { getPermissionTree } from '../../../api/permission';




const RoleList: React.FC = () => {
  // TODO: 优化 useMemo useCallback
  const columns: ColumnsType<Role> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName',
    },
    {
      title: '角色类型',
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
            <Button type="primary" icon={<FormOutlined />} onClick={() => showModal(row)}>编辑</Button>
            <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(row.id)}>删除</Button>
          </div>
        )
      }
    },
  ];

  /* list */
  const [data, setData] = useState<Role[]>([])
  useEffect(() => {
    initList()
  }, [])

  const initList = () => {
    getRoleList().then(res => {
      setData(res)
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
        deleteRole(id).then(res => {
          initList()
        })
      }
    });
  }


  /* Model */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState<Role>()
  const showModal = (role: Role) => {
    setIsModalOpen(true);
    setRole(role)
    setCheckedKeys(role.rights)
  };
  const handleOk = () => {
    const { id } = role!
    patchRole(id, { rights: checkedKeys as string[] }).then(res => {
      setIsModalOpen(false);
      initList()
      message.success('更新成功')
    })
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* tree */
  const [treeData, setTreeData] = useState<Right[]>([])
  useEffect(() => {
    getPermissionTree().then(res => {
      setTreeData(res)
    })
  }, [])

  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>([])
  const onCheck: TreeProps['onCheck'] = ({ checked }: any) => {
    setCheckedKeys(checked as React.Key[])
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(row) => row.id}
        pagination={{ pageSize: 5 }}
      />
      <Modal title="编辑角色权限" destroyOnClose open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Tree
          checkable
          checkStrictly
          onCheck={onCheck}
          checkedKeys={checkedKeys}
          treeData={treeData}
        />
      </Modal>
    </>
  );
};

export default RoleList;