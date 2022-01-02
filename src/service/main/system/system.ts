import { IDataType } from '@/service/types';
import hyRequest from '../../index';

export function getPageListData(url: string, queryInfo: any) {
  // return hyRequest.post<IDataType<ILoginResult>>({
  return hyRequest.post({
    url: url,
    data: queryInfo
  });
}
// /users/id
export function deletePageData(url: string) {
  return hyRequest.delete<IDataType>({
    url: url
  });
}
