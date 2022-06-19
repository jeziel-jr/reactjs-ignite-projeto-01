import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import './global.css';
import styles from './App.module.css';


function App() {


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Jeziel Junior" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi ab provident ut nobis dolore architecto at! Exercitationem eum asperiores ex delectus similique beatae facere mollitia facilis animi, non fugiat." />
          <Post author="Jeziel Junior" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sequi ab provident ut nobis dolore architecto at! Exercitationem eum asperiores ex delectus similique beatae facere mollitia facilis animi, non fugiat." />
        </main>
      </div>
    </>
  );
}

export default App;
