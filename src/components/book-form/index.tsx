import { Form, Input, Button, Select, Upload, Row, Col } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useAppDispatch } from '@/hooks/reduxHooks'
import { addByPayload, update, decrement } from '@/store/features/bookSlice'
import { Book } from '@/models/book'
import { useEffect } from 'react'

type Props = {
  book?: Book
  index?: number
}

export function InnerBookCreationForm({ book, index }: Props) {
  const [form] = Form.useForm<Book>()

  const dispatch = useAppDispatch()
  const onFinish = (values: any) => {
    if (book) {
      dispatch(update({ index: index, item: { ...values, imgUrl: book.imgUrl } }))
    } else {
      dispatch(addByPayload(values))
    }
  }

  const onDeleteItem = () => {
    if (index) dispatch(decrement(index))
  }

  useEffect(() => {
    if (book) {
      form.setFieldsValue(book)
    }
  }, [book])
  return (
    <Form
      name="basic"
      form={form}
      labelCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      style={{ width: 'fit-content' }}
      layout="vertical"
    >
      <Row gutter={[16, 16]}>
        <Col>
          <Form.Item label="Upload" valuePropName="fileList" extra="5MB max supported">
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button icon={<UploadOutlined />} disabled>
                Click to upload
              </Button>
            </Upload>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input name!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="des" rules={[{ required: true, message: 'Please input description!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input price!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please input price!' }]}>
            <Select
              options={[
                { value: 'Science', label: 'Science' },
                { value: 'Horror', label: 'Horror' },
                { value: 'Documentary', label: 'Documentary' },
                { value: 'History', label: 'History' },
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              {book ? 'Update' : 'Submit'}
            </Button>
          </Form.Item>
          {book && (
            <Button type="text" danger onClick={onDeleteItem}>
              Delete
            </Button>
          )}
        </Col>
      </Row>
    </Form>
  )
}
