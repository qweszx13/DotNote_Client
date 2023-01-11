import { Menu } from 'antd';
import React from 'react';
import { Button } from 'antd';

const Mainpage_Navbar = () => (

  

  <>
    <div class="inline">
      DotNote
    </div>
    <div>
      <div class="inline text-right">
        <Menu mode="horizontal" defaultSelectedKeys={['point']}>
        
          <Menu.Item key="point">
            ポイント購入
          </Menu.Item>
          
          
          
          
          <Button>ログイン</Button>
          <Button>会員登録</Button>
          <Button type="primary">primary</Button>
          <Button>secondary</Button>
        </Menu>
      </div>
    </div>
  </>

);

export default Mainpage_Navbar;