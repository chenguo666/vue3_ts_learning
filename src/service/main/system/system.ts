import hyRequest from '../../index';

export function getPageListData(url: string, queryInfo: any) {
  // return hyRequest.post<IDataType<ILoginResult>>({
  return hyRequest.post({
    url: url,
    data: queryInfo
  });
}