import React from 'react';
import DotNoteLogo from '../../Assets/IMG/DotNoteLogo.png';
import { Menu,Button } from 'antd';
import { MoneyCollectOutlined, HomeOutlined, SettingOutlined, SolutionOutlined } from '@ant-design/icons';


const MainpageNavbar = () => (

  <>
    <div className='flex h-full w-full bg-white items-center"'>
      <span className="h-full pl-8 w-1/2 flex items-center">
        <img src={DotNoteLogo} alt='MainLogo' className="h-full" onClick={()=>{console.log("메인페이지로")}}></img>
        <span>
          회원정보 들어갈 예정 임둥
        </span>
      </span>
      <span className="h-full pr-8 w-1/2 flex items-center justify-end">
        <Menu mode="horizontal" defaultSelectedKeys={['mail']} style={{height:"50%",width:"380px",border:"0px",alignItems:"center"}}>
          <Menu.Item key="mail" icon={<MoneyCollectOutlined style={{fontSize:"20px"}}/>}>
            PointStore
          </Menu.Item>
          <Menu.Item key="new" icon={<HomeOutlined style={{fontSize:"20px"}}/>}>
            MyPage
          </Menu.Item>
          <Menu.Item key="newOne" icon={<SettingOutlined style={{fontSize:"20px"}}/>}>
            Setting
          </Menu.Item>
        </Menu>
        <Button type="primary" shape="round" icon={<SolutionOutlined />} className='t-2'>
          投稿
        </Button>
      </span>
    </div>
  </>

);

export default MainpageNavbar;