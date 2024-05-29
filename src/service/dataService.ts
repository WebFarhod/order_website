import { IDataType } from "../types/dataType";
import axios from "./api";

const DataService = {
  async getAllItem() {
    return (await axios.get<IDataType[]>(`/items`)).data;
  },
};

export default DataService;
