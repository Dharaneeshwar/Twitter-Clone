import './App.css';
import Sidebar from './Sidebar/Sidebar.js'
import Feed from './Feed/Feed.js'
import Widgets from './Widgets/Widgets.js'

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Feed/>
      <Widgets/>
    </div>
  );
}

export default App;
