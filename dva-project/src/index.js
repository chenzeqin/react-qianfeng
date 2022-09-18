import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model  管理状态（redux redux-saga）
// app.model(require('./models/example').default);

// 4. Router: 管理路由
app.router(require('./router').default);

// 5. Start
app.start('#root');
