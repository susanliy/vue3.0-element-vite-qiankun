<template>
  <div class="layout-navigation">
    <scroll-pane ref="scrollPaneRef" class="tags-view-wrapper">
      <router-link
        v-for="(tag, index) in tagList"
        ref="tag"
        :key="index"
        :class="isActive(tag) ? 'active' : ''"
        :to="{ path: tag.path, query: tag.query }"
        class="layout-navigation__item"
        @click.middle="closeSelectedTag(tag)"
      >
        <span>{{ tag.title }}</span>
        <i
          class="iconfont iconfont-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        />
      </router-link>
    </scroll-pane>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from 'vue'
import { useStore } from '@/store'
import { useRoute, useRouter } from 'vue-router'
import ScrollPane from './ScrollPane.vue'

export default defineComponent({
  components: {
    ScrollPane,
  },
  setup() {
    const { state, dispatch } = useStore()
    const currentRoute = useRoute()
    const router = useRouter()
    const tagList = computed(() => state.menu.navigation)

    //todo临时存放
    dispatch('menu/loginInfo')
    const isActive = (tag: any) => {
      return tag.path === currentRoute.path
    }

    //跳转判断
    const toLastView = (navigation: []) => {
      const latestView: any = navigation.slice(-1)[0]
      if (latestView) {
        router.push(latestView.fullPath)
      } else {
        router.push('/')
      }
    }

    //添加导航栏  ---todo 新增有告警
    const addTags = () => {
      if (currentRoute.name) {
        dispatch('menu/addNavigate', currentRoute)
      }
      return false
    }
    //删除导航栏
    const closeSelectedTag = (view: any) => {
      dispatch('menu/delNavigate', view).then((navigation) => {
        if (isActive(view)) {
          toLastView(navigation)
        }
      })
    }
    watch(
      () => currentRoute.name,
      () => {
        if (currentRoute.name !== 'Home') {
          addTags()
        }
      },
      {
        deep: false,
        immediate: true,
      },
    )

    return {
      tagList,
      closeSelectedTag,
      isActive,
    }
  },
})
</script>

<style lang="scss">
.layout-navigation {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 5px 0 10px;
  margin: 10px 0;
  height: 30px;
  &__item {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    background-color: #fff;
    font-size: 12px;
    margin-right: 10px;
    color: #555;
    cursor: pointer;
    border: 0;
    .iconfont {
      width: 0;
      overflow: hidden;
      transition: all 0.3s;
      font-size: 14px;
      margin: 8px 0;
      color: #555;
      &:hover {
        font-weight: 600;
        color: #409eff;
      }
    }
    &.active {
      color: #409eff;
      .iconfont {
        width: auto;
        margin-left: 3px;
      }
    }
    &:hover {
      .iconfont {
        width: auto;
        margin-left: 3px;
      }
    }
  }
}
</style>
