<template>
  <div class="nav-header">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="content">
      <div>
        <nav-breadcrumb :breadcrumbs="breadcrumbs" />
      </div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import UserInfo from './user-info.vue';
import NavBreadcrumb from '@/base-ui/breadcrumb';
import { pathMapBreadcrumbs } from '@/utils/map-menu';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
export default defineComponent({
  emits: ['foldChange'],
  components: {
    UserInfo,
    NavBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false);
    const store = useStore();
    const route = useRoute();
    const handleFoldClick = () => {
      isFold.value = !isFold.value;
      emit('foldChange', isFold.value);
    };

    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenu;
      const currentPath = route.path;
      return pathMapBreadcrumbs(userMenus, currentPath);
    });

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    };
  }
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
