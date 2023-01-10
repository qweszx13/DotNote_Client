import { Menu } from 'antd';
import React from 'react';
import { Button } from 'antd';

const Mainpage_Navbar = () => (

  

  <>
    <p class="inline">
      DotNote
    </p>
    <p class="text-right inline">
      <Menu mode="horizontal" defaultSelectedKeys={['point']}>
      
        <Menu.Item key="point">
          ポイント購入
        </Menu.Item>
        <Menu.Item key="page1">
          ページ1
        </Menu.Item>
        <Menu.Item key="page2">
          ページ2
        </Menu.Item>
        <Menu.Item key="page3">
          ページ3
        </Menu.Item>
        
      </Menu>
    </p>
    <Button>ログイン</Button>
    <Button>会員登録</Button>
    
  </>

);

export default Mainpage_Navbar;