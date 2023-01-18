import { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input } from 'antd';



function MainPageLoginModal(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  const onFinish = () =>{
    form.resetFields();
    alert("폼전송 성공");
  }

  const onFinishFailed = () => {
    alert("폼전송 실패");
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        준일이가만든 로그인 버튼에 들어갈 예정
      </Button>
      <Modal 
      title="ログイン" 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel}
      footer={null}
      >
        <Form
        name="basic"
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{textAlign:"right"}}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>利用約款同意</Checkbox>
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{marginRight:"40px"}}>
              Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
}

export default MainPageLoginModal;