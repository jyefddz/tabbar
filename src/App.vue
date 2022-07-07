<template>
  <div>
    <MyHeader title="tabbar"></MyHeader>
    <div style="margin-top: 45px">
      <component :is="comName"> </component>
    </div>
    <MyTabBar :list="tabList" @changeTab="changeTabFn"></MyTabBar>
  </div>
</template>

<script>
// 布局
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
// 引入页面组件
import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";
export default {
  name: "TabbarApp",
  components: {
    MyHeader,
    MyTabBar,

    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  data() {
    return {
      comName: "MyGoodsList",
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  methods: {
    changeTabFn(val) {
      // val 组件名称
      this.comName = val;
    },
  },
};
</script>

<style>
</style>