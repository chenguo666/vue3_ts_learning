export interface IAccount {
  name: string;
  password: string;
}
export interface ILoginResult {
  token: string;
  id: number;
  name: string;
}
//  辅助工具 json to js
export interface IUserInfo {
  token: string;
  id: number;
  name: string;
}
// export interface IDataType<T = any> {
//   code: number;
//   data: T;
// }
