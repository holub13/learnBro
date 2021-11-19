export interface FormProps {
    config: ConfigItem[];
    to: string;
    title: string;
    titleLink: string;
}
  
export interface Fields {
    [propName: string]: string;
}
  
export interface ErrorsFields {
    [propName: string]: boolean;
}
  
export interface ConfigItem {
    name: string;
    type: string;
    placeholder: string; 
}