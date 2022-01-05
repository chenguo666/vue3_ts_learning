import { ref } from 'vue';
import PageModel from '@/components/page-model';
export function usePageModel() {
  const pageModelRef = ref<InstanceType<typeof PageModel>>();
  const defaultInfo = ref({});
  const handleEditData = (item: any) => {
    console.log('edit', item);
    defaultInfo.value = { ...item };
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisable = true;
    }
  };
  const handleNewData = () => {
    console.log('new');
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisable = true;
    }
  };
  return [pageModelRef, defaultInfo, handleEditData, handleNewData];
}
