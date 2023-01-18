import { useState } from "react";
import EmptyHeartImg from "../../Assets/IMG/empty-heart.png";
import HeartImg from "../../Assets/IMG/heart.png";
import styled from "styled-components";

function MainPageLikeButtonest() {
    let [like,setLike] = useState([0]);
    let [flag,setFlag] = useState(true);
    
    function buttonOnClick(){
        let copy = [...like];
        if(flag === false){
            copy[0] -= 1;        
        }else if(flag === true){
            copy[0] += 1;    
        }
        setLike(copy);
        setFlag(!flag);
    }

    const Heart = styled.img`
    }
    `;
    
    return(
        <div className="-inlineflex justify-center flex-col text-center text-base font-bold ">
            {like[0]} 
            <span className="p-3 rounded-full bg-white">
                {
                <Heart src={flag===true?EmptyHeartImg:HeartImg} onClick={buttonOnClick} className="w-6 h-6"></Heart> 
                }
            </span>
            
        </div>
    )
  }

  export default MainPageLikeButtonest;