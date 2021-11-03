import style from './App.module.scss';
import {MessageList} from "./components/MessageList";
import {LoginBox} from "./components/LoginBox";

export function App() {
  return (
      <main className={style.contentWrapper}>
          <MessageList />
          <LoginBox />
      </main>
  )
}
