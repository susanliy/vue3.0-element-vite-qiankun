<template>
  <el-header class="layout-header">
    <i class="iconfont icon-navigation"></i>
    <breadcrumb />
    <div class="layout-header__user">
      <el-dropdown size="small" @visible-change="dropdownChange">
        <div class="user">
          <user-outlined />
          <div class="nick">角色</div>
          <i
            class="iconfont iconfont-arrow-down"
            :style="{
              transform: `rotate(${isDropdown ? '180deg' : '0deg'})`,
              transition: 'transform .3s',
            }"
          ></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script lang="ts" setup>
  import { UserOutlined } from '@ant-design/icons-vue';
  import { ref } from 'vue';
  import Breadcrumb from '../header/Breadcrumb.vue';

  const isDropdown = ref<boolean>(false);
  const dropdownChange = (val: boolean) => (isDropdown.value = val);
</script>

<style lang="scss">
  .el-header {
    --el-header-padding: 0 10px;
  }
  .layout-header {
    overflow: hidden;
    line-height: 40px;
    color: #fff;
    display: flex;
    align-items: center;
    background-color: #303445;
    height: 40px;
    &__breadcrumb {
      font-weight: 400;
      margin-left: 20px;
      line-height: 40px;
      font-size: 13px;
      .iconfont {
        float: left;
        font-size: 20px;
        margin-right: 8px;
      }
    }
    &__user {
      margin-left: auto;
      .user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        line-height: 30px;
        .nick {
          overflow: hidden;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 400;
        }
        .iconfont {
          font-size: 14px;
          margin: 0 8px;
          &.iconfont-user {
            font-weight: 600;
          }
        }
      }
    }
  }
</style>
