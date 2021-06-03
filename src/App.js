import './App.css';
import './base.css';
import './style.css';
//import './bootstrap.min.css';
import Header from './component/Header';
import SendMessageForm from './component/SendMessageForm';
import TouitContainer from './component/TouitContainer'
import TouitTrending from './component/TouitTrending'

function App() {
  return (
    <>
      <Header />
      <main className='main-container' id='main-container'>
        <SendMessageForm />
        <TouitContainer />
        <TouitTrending />
      </main>
    </>
  );
}

export default App;
