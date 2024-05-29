import { useQuery } from "@tanstack/react-query";
import DataService from "../../dataService";
export function useData() {
  return useQuery({
    queryKey: ["datas"],
    queryFn: DataService.getAllItem,
  });
}
