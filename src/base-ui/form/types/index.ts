type IFormType = 'input' | 'password' | 'select' | 'datepicker';
export interface IFromItem {
  label: string;
  type: IFormType;

  rules?: any[];
  placeholder?: any;
  options?: any[];
  otherOptions?: any;
}
