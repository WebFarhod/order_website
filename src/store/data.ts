import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IDataType } from "../types/dataType";

interface IProps {
  dataDetail: IDataType | [];
  setDataDetail: (data: IDataType) => void;
}

export const useDataStore = create<IProps>()(
  devtools((set) => ({
    dataDetail: [],
    setDataDetail: (data: IDataType) => set({ dataDetail: data }),
  }))
);
