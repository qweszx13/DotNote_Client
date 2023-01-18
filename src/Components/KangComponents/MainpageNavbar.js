import { Menu } from 'antd';
import React from 'react';
import { Button } from 'antd';

const MainpageNavbar = () => (

  <>
    <div className="inline-bloc">
      DotNote
    </div>
    <div>
      <div className="flex flex-row-reverse">
        <Button>ログイン</Button>
        <Button>会員登録</Button>
        <Menu mode="horizontal" defaultSelectedKeys={['point']}>
          <Menu.Item key="point">
            ポイント購入
          </Menu.Item>
          <Menu.Item>
            ページ
          </Menu.Item>
          <Menu.Item>
            ページ
          </Menu.Item>
        </Menu>
      </div>
    </div>
  </>

);

export default MainpageNavbar;