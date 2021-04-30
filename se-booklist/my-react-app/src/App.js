
import Header from './componeents/Header';
import Sidebar from './componeents/Siderbar';
import MainContent from './componeents/MainContent';

function App() {
  return (
    <div className="App">
    <Header />
      <div className="content-warp">
      <Sidebar
          topBook={topBook} />
          <MainContent />
       </div>
    </div>
  );
}

export default App;
