// 스토어를 생성하는 함수륾 만들어서 내보냄
// 이 함수는 store/index.js 에서 불러와서 사용하게됨

import {createStore, applyMiddleware, compose} from 'redux';
import modules, {rootSaga} from './modules';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const configure = (initialState) => {
    // const store  = createStore(modules);
    // const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware();
    let middleware = [logger, sagaMiddleware];
    const store = createStore(
        modules,
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configure;


