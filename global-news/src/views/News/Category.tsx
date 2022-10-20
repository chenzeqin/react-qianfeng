import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { getCategories, updateCategory } from '../../api/news';
import { Category } from './news.type';


interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'text';
  record: Category;
  index: number;
  children: React.ReactNode;
}
// 自定义table cell
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const NewsCategory: React.FC = () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState<number>();
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    initList()
  }, [])

  // 初始化数据
  const initList = () => {
    setEditingKey(undefined);
    getCategories().then(res => setCategories(res))
  }

  const isEditing = (record: Category) => record.id === editingKey;

  const edit = (record: Partial<Category>) => {
    form.setFieldsValue({ name: '', age: '', address: '', ...record });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey(undefined);
  };

  const save = async (id: number) => {
    try {
      const row = (await form.validateFields()) as Category;

      updateCategory(id, row).then(res=>{
        initList()
      })

    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: '名称',
      dataIndex: 'title',
      editable: true,
    },
    {
      title: 'operation',
      width: "100px",
      dataIndex: 'operation',
      render: (_: any, record: Category) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={!!editingKey} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Category) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={categories}
        columns={mergedColumns}
        rowClassName="editable-row"
        rowKey={(row) => row.id}
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

export default NewsCategory;