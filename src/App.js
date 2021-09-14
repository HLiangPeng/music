import { IconStyle } from './assets/iconfont/iconfont'; // 引入图标
import { GlobalStyle } from './style'; // 全局基本样式

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconStyle />
      <i className="iconfont">&#xe644;</i>
    </div>
  );
}

export default App;
