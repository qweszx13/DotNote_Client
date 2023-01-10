import { ReactComponent as People } from "../../Assets/svg1/people.svg";


function Mainpage_Header() {
    return(
      <div className="h-[100px] text-center bg-gray-50 text-gray-800 py-20 px-6 text-3xl font-bold" >
        <People className="inline t-1"></People>
        <p className="inline"> 最近人気あるポスト</p>
      </div>
    )
  }

  export default Mainpage_Header;

