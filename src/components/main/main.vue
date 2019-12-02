<template>
  <Layout style="height: 100%" class="main">
    <Sider
      hide-trigger
      collapsible
      :width="256"
      :collapsed-width="64"
      v-model="collapsed"
      class="left-sider"
      :style="{overflow: 'hidden'}"
    >
      <Menu theme="dark">
        <Submenu :name="item.name" v-for="(item,index) in menuList" :key="index">
          <template slot="title">
            <Icon type="ios-paper" />{{item.title}}
          </template>
          <MenuItem v-for="(item1,index) in item.children" :key="index" :name="item1.name">{{item1.title}}</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout>
      <Header class="header-con">
        <Dropdown trigger="click" @on-click="changeDrop($event)">
          <a href="javascript:void(0)">
              个人信息
              <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem name="logout">退出</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Header>
      <Content class="main-content-con">
        <Layout class="main-layout-con">
          <Content class="content-wrapper">
            <!-- <keep-alive :include="cacheList">
              <router-view/>
            </keep-alive>-->
            <keep-alive>
              <router-view />
            </keep-alive>
          </Content>
        </Layout>
      </Content>
    </Layout>
  </Layout>
</template>
<script>
import routers from "@/router/routers";
import minLogo from "@/assets/images/logo-min.jpg";
import maxLogo from "@/assets/images/logo.jpg";
import "./main.less";
export default {
  name: "Main",
  components: {},
  data() {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      isFullscreen: false,
      menuList: []
    };
  },
  computed: {},
  methods: {
    changeDrop(name){
      if(name === 'logout'){
        this.$get('/api/logout').then(()=>{
          this.$router.replace('/login')
        })
      }
    }
  },
  watch: {},
  mounted() {
    this.$get('/api/menu').then(res=>{
      this.menuList = res.menuList
    })
  }
};
</script>
