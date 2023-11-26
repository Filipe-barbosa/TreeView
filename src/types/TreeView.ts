export interface DataInterface {
  id: string;
  label: string;
  checked: boolean;
  children: DataInterface[];
}