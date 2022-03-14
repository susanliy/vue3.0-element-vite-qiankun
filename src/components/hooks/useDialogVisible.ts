import { ref } from 'vue'

export default function useDialogVisible() {
  const dialogVisible = ref(false)
  const openDialog = () => {
    dialogVisible.value = true
  }
  const closeDialog = () => {
    dialogVisible.value = false
  }
  return { openDialog, closeDialog, dialogVisible }
}
