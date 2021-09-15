import { IconStyle } from './assets/iconfont/iconfont'; // 引入图标
import { GlobalStyle } from './style'; // 全局基本样式
import { Provider } from 'react-redux'
import store from './store/index'
import routes from './router/index'
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        { renderRoutes(routes) }
      </HashRouter>
    </Provider>
  );
}

export default App;
