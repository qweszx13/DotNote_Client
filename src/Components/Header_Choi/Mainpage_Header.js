import { ReactComponent as People } from "../../Assets/SVG/people.svg";


function Mainpage_Header() {
    return(
      <div className="text-center bg-gray-50 text-gray-800 text-3xl font-bold h-full pt-3">
        <People className="inline t-1"></People>
        <p className="inline"> 最近人気あるポスト</p>
      </div>
      // <div className="h-1/2 text-center bg-gray-50 text-gray-800 py-20 px-6 text-3xl font-bold" >
        
      // </div>   
    )
  }

  export default Mainpage_Header;

