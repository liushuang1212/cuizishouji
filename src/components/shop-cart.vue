<template>
    <div 
        v-show = "$store.state.isShow"
        class="nav-cart-wrapper">
        <div class="nav-cart-list">
            <div class="empty" 
                v-show="!cardList.length">
                <h3>购物车为空</h3>
                <p>您还没有选购任何商品，现在前往商城选购吧!</p>
            </div>
            <div class="full"
                v-show="cardList.length" >
                <div class="nav-cart-items">
                    <ul>
                        <li class="clear"
                            v-for="item in cardList"
                            :key ="item.sku_id"
                            >
                            <div class="cart-item js-cart-item cart-item-sell">
                                <div class="cart-item-inner">
                                    <div class="item-thumb">
                                        <!-- <img src="../assets/img/goods/1.png"> -->
                                        <img :src="item.ali_image">
                                    </div>
                                    <div class="item-desc">
                                        <div class="cart-cell">
                                            <h4> 
                                                <a href="#/item/100027401">{{item.title}}</a>
                                            </h4>
                                            <p class="attrs">
                                                <span>{{item.spec_json.show_name}}</span>
                                            </p>
                                            <h6>
                                                <span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span class="item-num">x {{item.num}}</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div 
                                        class="del-btn"
                                        @click = "$store.commit('delCard',item)"
                                        >删除</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="nav-cart-total">
                    <p>共 <strong class="ng-binding">{{$store.getters.totalNum}}</strong> 件商品</p>
                    <h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{$store.getters.totalPrice}}</span></h5>
                    <h6>
                        <a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            cardList: this.$store.state.cardList
        }
    }
}
</script>



<style>

</style>
