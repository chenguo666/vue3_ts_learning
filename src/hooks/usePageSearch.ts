import { ref } from 'vue';
import PageContent from '@/components/page-content';
export function usePageSearch() {
  const pageContent = ref<InstanceType<typeof PageContent>>();
  const handleQueryClick = (queryInfo: any) => {
    console.log('query', queryInfo);
    pageContent.value?.getPageData(queryInfo);
  };
  const handleResetClick = () => {
    console.log('reset');
    pageContent.value?.getPageData();
  };
  return [pageContent, handleQueryClick, handleResetClick];
}
