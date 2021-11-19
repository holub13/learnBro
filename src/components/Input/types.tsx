export interface InputProps {
    name: string;
    type: string;
    placeholder: string;
    invalid: boolean;
    onValueChange: (e: any) => void;
  }