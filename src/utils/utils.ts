import { unref } from 'vue';

/**
 * 列表结构转为树形结构
 * @param arra 传入的数组
 * @param idKey 自己本身的id
 * @param parentIdKey 父级的id
 * @param childrenKey 命名子集的名称
 * @returns
 */
export const translateArrayToTree = (
  arra,
  idKey = 'id',
  parentIdKey = 'pid',
  childrenKey = 'children'
) => {
  const array = unref(arra);
  const menuTempMap = {};
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    menuTempMap[item[idKey]] = item; // 存为map，方便查找,优化查找效率O(n) => O(1)
  }
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const parent = menuTempMap[item[parentIdKey]]; // 找到父节点
    if (parent) {
      parent[childrenKey] ? parent[childrenKey].push(item) : (parent[childrenKey] = [item]); // 赋值children
    } else {
      // 没有父节点为第一级
      result.push(item);
    }
  }
  return result;
};

// 根据id属性从数组（树结构）中移除元素
export const removeTreeListItem = (treeList, id) => {
  if (!treeList || !treeList.length) {
    return;
  }
  for (let i = 0; i < treeList.length; i++) {
    if (treeList[i].id === id) {
      treeList.splice(i, 1);
      break;
    }
    removeTreeListItem(treeList[i].children, id);
  }
};
