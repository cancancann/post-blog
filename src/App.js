import { useEffect } from 'react';
import './App.css';
import AppRouter from './router/Router';
import { socket } from './socket/socket';
import { setSocketID } from './store/socketSlice/SocketSlice';
import store from './store/store'

function App() {
  useEffect(()=>{
    socket.on('connect',()=>{
      store.dispatch(setSocketID(socket.id))
    })
  })
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
