import hyRequest from '../index';
import { IAccount, ILoginResult } from './types';
enum LoginApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}
export function accountLoginRequest(account: IAccount) {
  // return hyRequest.post<IDataType<ILoginResult>>({
  return hyRequest.post<ILoginResult>({
    url: LoginApi.AccountLogin,
    data: account
  });
}
export function requestUserInfoByid(id: number) {
  // return hyRequest.post<IDataType<ILoginResult>>({
  return hyRequest.get<any>({
    url: LoginApi.LoginUserInfo + id
  });
}
export function requestUserMenusByRoleid(id: number) {
  // return hyRequest.post<IDataType<ILoginResult>>({
  return hyRequest.get<any>({
    url: LoginApi.UserMenus + id + '/menu'
  });
}
