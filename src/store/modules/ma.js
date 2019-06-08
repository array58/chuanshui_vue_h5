const moduleA = {
    state: { 
        count: 0,
        mark:''
    },
    mutations: {
      increment (state) {
        // 这里的 `state` 对象是模块的局部状态
        state.count++
      },
      setMark(state,val){
          state.mark = val;
      }
    },
  
    getters: {
      doubleCount2 (state) {
        return state.count * 2
      },
      getterTest(state){
        return `getter${state.mark}`
      }
    }
  }
export default moduleA;