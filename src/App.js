import './App.css';
import MainPage_SideMenu from "./Components/SideMenu_Kim/Mainpage_SideMenu";
import MainPage_LikeButton from './Components/LikeButton_Hwang/MainPage_LikeButton';

function App() {
  return (
    <div className="h-screen w-screen">
      <MainPage_SideMenu></MainPage_SideMenu>
      <MainPage_LikeButton></MainPage_LikeButton>
    </div>
  );
}

export default App;
