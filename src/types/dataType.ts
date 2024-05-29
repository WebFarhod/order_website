export interface IDataType {
  _id?: string;
  title: string;
  isSelect: boolean;
  multeSelect: boolean;
  tabs: Tab[];
}

interface Tab {
  _id: string;
  name: string;
  isSelect: boolean;
  price: number;
  image?: string;
  include?: string[];
}
// export interface TabPanel {
//   price: string;
//   image?: string;
// }
