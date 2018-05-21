<template>
    <div class="item">
        <div>
            <div class="item-img">
                <img :alt = "item.name" 
                :src="item.sku_info[nowNum].ali_image + '?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
            </div>
            <h6>{{item.name}}</h6>
            <h3>{{item.name_title}}</h3>
            <div class="params-colors">
                <ul class="colors-list">
                    <li
                    v-for="(color, index) in item.sku_info"
                    :key="color.sku_id"
                    @mouseover="overFn(index)"
                    ><a href="javascript:;" 
                        :class="{'active':nowNum===index}"
                        >
                        <img 
                        :src="'http://img01.smartisanos.cn/' + color.spec_json.image + '20X20.jpg'"></a></li>
                </ul>
            </div>
            <div class="item-btns clearfix">
                <span class="item-gray-btn"
                    @click = "checkDetails(item.sku_info[nowNum])">
                    查看详情 </span>
                    <!-- 当点击详情时，需要跳转到详情页，即改变一下路径 -->
                <span 
                    class="item-blue-btn"
                    @click = "$store.commit('addCard',item.sku_info[nowNum])"
                    >加入购物车 </span>
            </div>
            <div class="item-price clearfix">
                <i>¥</i><span>{{item.price}}</span>
            </div>
            <div class="discount-icon">false</div>
            <div class="item-cover">
                <a href="javascript:;" target="_blank"
                
                        @click = "checkDetails(item.sku_info[nowNum])"
                ></a>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props:{
        item:{
            type: Object
        }
    },
    data(){
        return{
            nowNum: 0
        }
    },
    methods:{
        overFn(n){
            this.nowNum = n;
        },
        checkDetails(which){
            this.$router.push('/item/'+ which.sku_id);
            this.$store.commit("changeDetail",which.sku_id);
        }
    }
}
</script>

<style>

</style>

