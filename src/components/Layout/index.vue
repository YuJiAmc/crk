<template>
  <div class="crm-container">
    <el-container>
      <el-header height="75px">
        <div class="head-top-wrap clearfix">
          <div class="top-l">123</div>
          <div class="top-r">234</div>
        </div>
        <div class="head-nav-wrap">
          <div class="logo-wrap">
            <span>蚂蚁CRM</span>
          </div>
          <div class="realtime-broadcast"></div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="165px">
          <el-menu
            router
            id="menu"
            unique-opened
            :default-active="$route.path"
            background-color="#152438"
            text-color="#fff"
            active-text-color="#f39531"
          >
            <el-menu-item index="/home">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu
              v-for="item in menu"
              v-if="!item.hidden"
              :key="item.name"
              :index="resolvePath(item.path)"
            >
              <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{item.meta.title}}</span>
              </template>
              <el-menu-item
                style="padding-left: 50px;"
                v-for="childItem in item.children"
                :key="childItem.name"
                :index="resolvePath(item.path,childItem.path)"
              >{{childItem.meta.title}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import route from "@/router.js";
import path from "path";

export default {
  data() {
    return {
      menu: []
    };
  },
  methods: {
    resolvePath(router, childrenRouter) {
      if (!childrenRouter) {
        return router;
      }
      return path.join(router, childrenRouter);
    }
  },
  created() {
    this.menu = route.options.routes;
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.crm-container {
  height: 100%;
  & > .el-container {
    height: 100%;
  }
  .el-header {
    padding: 0;
    background: #fff;
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.2);
  }
  .head-top-wrap {
    padding: 0px 10px;
    height: 25px;
    line-height: 25px;
    box-sizing: border-box;
    background-color: #1b2736;
    color: #fff;
    font-size: 12px;

    .top-l {
      float: left;
    }
    .top-r {
      float: right;
    }
  }
  .head-nav-wrap {
    .logo-wrap {
      height: 50px;
      line-height: 50px;
      width: 150px;
      padding-right: 15px;
      // background-color: #f39531;
      background-color: #b1f3f8e0;
      text-align: center;
      span {
        font-size: 20px;
        color: #b1f3f8e0;
      }
    }
  }
  .el-aside {
    background-color: #152438;
  }
  .el-main {
    padding: 10px;
    background-color: #eee;
  }
  .el-submenu .el-menu-item {
    height: 40px;
    line-height: 40px;
    min-width: 0px;
    font-size: 12px;
  }
}
</style>