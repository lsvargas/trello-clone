import ICardTask from "./cardTask.type";

interface ICard {
  id: number;
  title: string;
  elements: ICardTask[];
}

export default ICard;