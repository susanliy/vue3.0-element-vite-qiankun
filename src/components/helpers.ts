//字符串对象类型
export interface StringObjType {
  [key: string]: string | number;
}

/****** 表单的类型 *****/
//表单操作类型
export declare type InternalNamePath = (string | number)[];
export declare type NamePath = string | number | InternalNamePath;
export interface FormActionType {
  validateFields: (nameList?: NamePath[]) => Promise<any>;
  validate: (nameList?: NamePath[]) => Promise<any>;
}

// 基础表单属性
export type OptionsType = {
  label?: string | undefined;
  value?: string | number | undefined;
};

export type BasicPropsType = {
  placeholder?: string | string[];
  options?: Array<OptionsType>;
  style?: string;
  allowClear?: boolean;
  showSearch?: boolean;
  treeNodeFilterProp?: string;
  dropdownstyle?: object;
  fieldNames?: object;
  treeDefaultExpandAll?: boolean;
  getPopupContainer?: Function;
  treeData?: Array<any>;
  mode?: 'multiple' | 'tags' | 'combobox';
  showTime?: boolean | object;
  format?: string;
  valueFormat?: string;
  showArrow?: boolean;
};

export type basicProps = {
  label?: string;
  component: string;
  helpMessage?: string;
  props?: BasicPropsType;
  rules?: any;
};

export type FormItemsType = {
  [propName: string]: basicProps;
};
