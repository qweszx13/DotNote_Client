import { useState } from "react";

function MainPage_LikeButtonest() {
    let [title, setTitle] = useState(['떡볶이맛집']);
    let [like,setLike] = useState([0]);
    let [flag,setFlag] = useState(false);
    return(
     
        <div>
        {title.map((_,i)=>{return(
            <div className='list'>
                <div><span onClick={()=>{
                    let copy = [...like];
                    if(flag){
                        copy[i] -= 1;        
                    }else{
                        copy[i] += 1;    
                    }
                    setLike(copy);
                    setFlag(!flag);
                    }}>❤</span> {like[i]} </div>
                

            </div>
        )})}
        </div>
    )
  }

  export default MainPage_LikeButtonest;