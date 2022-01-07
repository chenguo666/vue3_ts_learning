import { ref } from 'vue';
import PageModel from '@/components/page-model';
type CallbackFn = (item?: any) => void;
export function usePageModel(newCb?: CallbackFn, editCb?: CallbackFn) {
  const pageModelRef = ref<InstanceType<typeof PageModel>>();
  const defaultInfo = ref({});
  const handleEditData = (item: any) => {
    console.log('edit', item);
    defaultInfo.value = { ...item };
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisable = true;
    }
    editCb && editCb(item);
  };
  const handleNewData = () => {
    console.log('new');
    defaultInfo.value = {};
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisable = true;
    }
    newCb && newCb();
  };
  return [pageModelRef, defaultInfo, handleEditData, handleNewData];
}
