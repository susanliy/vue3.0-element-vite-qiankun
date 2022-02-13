// 跳转这个页面在跳转子页面
<template>
  just to test

  <!-- teleport的用法 -->
  <!-- 可以嵌套到任何dom节点上 -->
  <div id="mainTE">父节点</div>
  <teleport to="#mainTE"><div>子节点</div></teleport>
</template>
