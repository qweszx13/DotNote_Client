import { useState } from 'react';
import { Button, Modal } from 'antd';



function Mainpage_Info_Modal(){
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        수아상 이 만든 카드가 들어갈 예에정
      </Button>
      <Modal title="ログインが必要な機能です" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className='text-slate-600'>値段がついてある掲示板です。</p>
      </Modal>
    </>
  );
}

export default Mainpage_Info_Modal;