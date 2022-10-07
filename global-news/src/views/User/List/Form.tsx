import React, { useEffect, useMemo, useState } from 'react'
import { Button, Checkbox, Select, Form, Input, Modal, message } from 'antd';
import { User } from '../type';
import { Role } from '../../Role/type';
import { getRoleList } from '../../../api/role';
import { Region } from '../../Region/type';
import { getRegionList } from '../../../api/region';
import { addUser, updateUser } from '../../../api/user';
const { Option } = Select

interface Props {
  visible: boolean,
  close: (needRefresh?: boolean) => void
  user?: User
}

export default function UserForm(props: Props) {
  const { visible, close, user } = props

  const handleOk = () => {
    form?.validateFields().then(() => {
      const data = form?.getFieldsValue()
      if (user) {
        updateUser(user.id, {
          ...user,
          ...data,
        }).then(res => {
          console.log(res)
          message.success('更新成功')
          close(true);
        })
      } else {
        addUser({
          ...data,
          default: true,
          roleState: true
        }).then(res => {
          console.log(res)
          message.success('新增成功')
          close(true);
        })
      }
      console.log(user);
    })
  };

  const handleCancel = () => {
    close();
  };

  const [form] = Form.useForm();

  const title = useMemo(() => {
    if (user) {
      return '编辑用户'
    }
    return '新增用户'
  }, [user])

  // 打开 关闭
  useEffect(() => {
    if (!visible) {
      setRegionDisabled(false)
      form?.resetFields()
    } else {
      user && form?.setFieldsValue(user)
      setRegionDisabled(user?.roleId === 1)
    }
  }, [visible, form, user])

  // 下拉数据
  const [roleList, setRoleList] = useState<Role[]>([])
  const [regionList, setRegionList] = useState<Region[]>([])
  useEffect(() => {
    getRoleList().then(res => setRoleList(res))
    getRegionList().then(res => setRegionList(res))
  }, [])

  // 区域是否可选
  const [regionDisabled, setRegionDisabled] = useState(false)
  // 超级管理员1 自动选中 全球
  const handleRoleChange = (roleId: number) => {
    if (roleId === 1) {
      form?.setFieldValue('region', 0)
    }
    setRegionDisabled(roleId === 1)
  }
  return (
    <Modal
      title={title}
      open={visible}
      onCancel={handleCancel}
      onOk={handleOk}
    >
      <Form
        name="basic"
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="角色"
          name="roleId"
          rules={[{ required: true, message: 'Please select your role!' }]}
        >
          <Select onChange={handleRoleChange}>
            {
              roleList.map(item => <Option key={item.id} value={item.id}>{item.roleName}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item
          label="区域"
          name="region"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Select disabled={regionDisabled}>
            {
              regionList.map(item => <Option key={item.id} value={item.id}>{item.title}</Option>)
            }
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}
