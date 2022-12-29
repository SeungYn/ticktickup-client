import './App.css';
import SassComponent from './SassComponent';

const API_KEY = 'adbac976fbf66922692022abed6b63e7';
const redirect = 'http://localhost:3000/auth/kakao/callback';
function App() {
  return (
    <div className='App'>
      <SassComponent />
    </div>
  );
}

export default App;
