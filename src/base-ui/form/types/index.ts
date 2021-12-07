type IFormType = 'input' | 'password' | 'select' | 'datepicker';
export interface IFromItem {
  label: string;
  type: IFormType;
  field: string;
  rules?: any[];
  placeholder?: any;
  options?: any[];
  otherOptions?: any;
}
export interface IForm {
  formItems?: IFromItem[];
  labelWidth?: string;
  colLayout?: any;
  itemLayout?: any;
  itemStyle?: any;
}
