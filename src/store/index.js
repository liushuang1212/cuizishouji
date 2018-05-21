import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state:{
        cardList: [],
        isShow: false, // 代表购物车是否出现
        isPromptShow: false,// 代表是否出现弹窗
        detail: null    // 查看详情时产品的id具体是哪一个
    },
    getters:{
        totalNum(state){        // 统计总数量
            return state.cardList.reduce(function(sum,item){
                return sum + item.num
            },0)
        },
        totalPrice(state){      // 统计总价格
            return state.cardList.reduce(function(sum,item){
                return sum + (item.num*item.price)
            },0)
        }
    },
    mutations:{
        addCard(state,obj){         // 添加一条到购物车
            var temp = state.cardList.find(item=>item.sku_id===obj.sku_id); //  找到需要添加的这一项
            
            if( !temp ){        // 如果产品的数量找不到的话,给产品的数量设置为1
                obj = Object.assign({},obj,{"num":1});      // assign 是对象的方法，
                state.cardList.push(obj);
            }else{          // 如果产品的数量找到的话,给产品的数量加1
                temp.num ++;
                if(temp.num > obj.limit_num){       // 在这里需要判断数量
                    temp.num --;
                    state.isPromptShow = true;      // 弹出框显示
                }
            }
            state.isShow = true;        // 购物车显示
            
        },
        addDefinedCard(state,obj){      // 添加自定义的条数到购物车
            var temp = state.cardList.find(item=>item.sku_id===obj.sku_id);
            if(!temp){
                state.cardList.push(obj);
            }else{
                temp.num += obj.num;
                if(temp.num > obj.limit_num){
                    temp.num = obj.limit_num;
                    state.isPromptShow = true;
                }
            }
            state.isShow = true;        // 购物车显示
        },
        delCard(state,obj){     // 删除一条购物车商品
            var indexNum = state.cardList.findIndex(item=>item.sku_id === obj.sku_id);  //找出那一项
            state.cardList.splice(indexNum,1);   // 通过splice来处理数据，这种方式可以引起页面重新渲染
        },
        showFn(state){           // 购物车显示
            state.isShow = true;
        },
        hideFn(state){          // 购物车隐藏
            state.isShow = false;
        },
        sureFn(state){      // 弹出框隐藏
            state.isPromptShow = false;
        },
        changeDetail(state,id){     //查看详情时，具体查看的时哪一项
            state.detail = id;
        }
    }
})

export default store