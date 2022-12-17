import { Draggable } from "react-beautiful-dnd";

import ICardTask from "../../../types/cardTask.type";

interface CardTaskProps {
  cardTask: ICardTask
  index: number;
  cardId: number;
}

function CardTask({ cardTask, index, cardId  } : CardTaskProps) {

  const uniqueItemColId = `taskId-${cardTask.id}-cardId-${cardId}`;

  return (
    <Draggable
      key={uniqueItemColId}
      draggableId={uniqueItemColId}
      index={index}
    >
      {(provided: any) => (
        <div
          className="p-4 border border-[white] rounded bg-[white] shadow"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="text-sm">
            {cardTask.title}
          </p>
        </div>
      )}
    </Draggable>
  )
}

export default CardTask;
