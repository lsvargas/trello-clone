import IListTask from "./listTask.type";

interface IList {
  id: number;
  title: string;
  elements: IListTask[];
}

export default IList;