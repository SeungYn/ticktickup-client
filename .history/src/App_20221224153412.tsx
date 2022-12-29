import './App.css';
import axios from 'axios';
import SassComponent from './SassComponent';

const API_KEY = 'adbac976fbf66922692022abed6b63e7';
const redirect = 'http://localhost:3000/auth/kakao/callback';
function App() {
  const url = `https://kauth.kakao.com/oauth/authorize?client_id=${API_KEY}&redirect_uri=${redirect}&response_type=code`;
  //axios.get(url).then((res) => console.log(res));
  return (
    <div className='App'>
      <a href={url}>a</a>
    </div>
  );
}

export default App;
