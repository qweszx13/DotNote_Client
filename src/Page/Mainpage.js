import React, { useState } from 'react';
import { Layout,Menu } from 'antd';
import PostPage from './PostPage';
import MainpageHeader from "../Components/ChoiComponents/MainpageHeader";
import MainPageNavbar from '../Components/KangComponents/MainpageNavbar';
import { ReactComponent as AirplaneSvg} from '../Assets/SVG/airplane.svg'
import { ReactComponent as CultureSvg} from '../Assets/SVG/culture.svg'
import { ReactComponent as MapSvg} from '../Assets/SVG/map.svg'
import { ReactComponent as OtherSvg} from '../Assets/SVG/other.svg'
import { ReactComponent as RamenSvg} from '../Assets/SVG/ramen.svg'
import { ReactComponent as TranslateSvg} from '../Assets/SVG/translate.svg'
import SignupPage from './SignupPage';

function Mainpage(){

  const { Header, Content,Sider } = Layout;
  const [pageNumber,setPageNumber] = useState(0);
  const dummyLabel = ['旅行','文化','地駅','食べ物','漢字','他'];

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
    <div className='h-max'>
      <Layout style={{height:"100%",width:"100%"}}>
       
        <Layout style={{height:"130px"}}>
          <Content style={{backgroundColor:"yellow"}}>
            <MainPageNavbar></MainPageNavbar>
            </Content>
          <Header style={{backgroundColor:"green",padding:"0px"}}>
            <MainpageHeader></MainpageHeader>
          </Header>
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
          {
            pageNumber === 0
            ?<PostPage></PostPage>
            :<SignupPage></SignupPage>
          }
        </Layout>
        
      </Layout>
    </div>
  )
}

export default Mainpage;