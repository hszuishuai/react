# readux-Saga的使用 //解决redux的异步请求
## 1.定义需要执行的异步请求
```javascript
 function* apiGetUseinfo(action) {
    try {
        const res = yield call(login, action.params); //call方法相当执行 await login(action.params)
        yield put(getUseinfo(res.data))  //put方法将actions传递给reducers执行
        console.log(res)
    } catch {
        return
    }
}
```
## 2. 监听saga
```javascript
    function* watch() {
        yield takeEvery(ASYNC_SET_USERINFO, apiGetUseinfo)
     }
```
## 3.redux 调用saga中间件
```javaScript
    import rootSaga from  "./saga"
    const sagaMiddleware=createSagaMiddleware()
    const store = createStore(
        Reducer,
        applyMiddleware(sagaMiddleware)
    )

    export default store

    sagaMiddleware.run(rootSaga)

```

# react-redux的使用
## 1.reduct-action  //返回action

```javascript
    const asyncUseinfo = (userinfo) => {
    return {
        type: ASYNC_SET_USERINFO,
        userinfo
    }
}
```
## 2.reducers  //reducers 中返回的值 必须返回跟原state中的键值一样  并且每个对应的action 必须有返回值 
```javascript
    const Reducer = (state = initState, action) => {
    // let count = state.count;
    switch (action.type) {
        case CHANEGE_COUTER:
            return {
                ...state,
                count:state.count+action.payload
            }
        case SET_USERINFO:{
            saveUserinfo(action.userinfo) //将用户信息存入stoarge
            return {
                ...state,
                userinfo:action.userinfo
            }
        }
        default:
            return state;
    }
}
```
## 3 actionsType  //定义所有的actions

## 4 在组件中的使用 //将store中的值挂在到组件props中

``` javaScript
  <button onClick={asyncClick.bind(this)}>saga</button>
  <h1>{this.props.count}</h1>

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = dispatch => ({
    onIncreaseClick: (num) => dispatch(changeCount(num)),
    asyncClick: () => dispatch(asyncCount())
})

const moduleHome = connect(
    mapStateToProps,
    mapDispatchToProps

)(Home);
```
## 5 全局连接store
```javaScript
    <Provider store={store}>
      <App />
    </Provider>
```