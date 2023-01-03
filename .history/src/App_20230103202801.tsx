import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useAppSelector } from './hooks/rtk';
import { store } from './modules';
console.log(store);
function App() {
  const { auth } = useAppSelector((state) => state.auth);
  return (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
