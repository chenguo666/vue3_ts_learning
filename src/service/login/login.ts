import hyRequest from '../index';
import { IAccount, ILoginResult } from './types';
enum LoginApi {
  AccountLogin = '/login'
}
export function accountLoginRequest(account: IAccount) {
  // return hyRequest.post<IDataType<ILoginResult>>({
  return hyRequest.post<ILoginResult>({
    url: LoginApi.AccountLogin,
    data: account
  });
}
