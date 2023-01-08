import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from './hooks/rtk';
import { store } from './modules';
console.log(store);
localStorage.setItem('a', JSON.stringify({ a: 'as' }));
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
