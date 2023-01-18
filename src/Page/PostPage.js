import React from 'react';
import { Layout } from 'antd';
import MainpageCard from '../Components/ChoiComponents/MainpageCard';

const { Content } = Layout;
let dummydata = [1,2,3,4,5,6]

function PostPage(){


  return(
    <>
      <Content>
        {dummydata.map((_,index)=>{
          return <MainpageCard key={index+"card"}></MainpageCard>
        })}
      </Content>
    </>
  )
}

export default PostPage;