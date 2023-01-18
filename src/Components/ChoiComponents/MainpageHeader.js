import { ReactComponent as People } from "../../Assets/SVG/people.svg";


function MainpageHeader() {
    return(
      <div className="text-center bg-gray-50 text-gray-800 text-3xl font-bold h-full pt-3">
        <People className="inline t-1"></People>
        <p className="inline"> 最近人気あるポスト</p>
      </div>
    )
  }

  export default MainpageHeader;

