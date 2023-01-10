import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { ReactComponent as AirplaneSvg} from '../../Assets/SVG/airplane.svg'
import { ReactComponent as CultureSvg} from '../../Assets/SVG/culture.svg'
import { ReactComponent as MapSvg} from '../../Assets/SVG/map.svg'
import { ReactComponent as OtherSvg} from '../../Assets/SVG/other.svg'
import { ReactComponent as RamenSvg} from '../../Assets/SVG/ramen.svg'
import { ReactComponent as TranslateSvg} from '../../Assets/SVG/translate.svg'
import { Layout, Menu } from 'antd';

function MainPage_SideMenu(){

  const { Header, Content, Sider } = Layout;

  const dummyLabel = ['旅行','文化','地駅','食べ物','漢字','他']

  const dummy= [AirplaneSvg, CultureSvg, MapSvg,RamenSvg,TranslateSvg,OtherSvg].map(
    (icon, index) => {
      const key = String(index + 1);
  
      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: dummyLabel[index],
  
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );


  return(
    <div className='h-full'>
      <Layout style={{height:"100%"}}>
       
        <Layout style={{height:"20%"}}>
          <Content style={{backgroundColor:"yellow"}}>Content</Content>
          <Header style={{backgroundColor:"green"}}>Header</Header>
        </Layout>
        <Layout  style={{height:"80%"}}>
          <Sider width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
                items={dummy}
              />
          </Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
      <div className='h-1/10 bg-yellow' >

      </div>
    </div>
  )
}

export default MainPage_SideMenu;