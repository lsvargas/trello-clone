import { Droppable } from "react-beautiful-dnd";

import ICard  from "../../../types/card.type";
import CardTask from "../CardTask";

interface CardProps {
  boardColumn: ICard;
}

function Card({ boardColumn }: CardProps) {
  console.log("------------------------------------------------")
  return (
    <div className="py-2 px-4 border border-[#ebecf0] rounded bg-[#ebecf0] min-w-[200px] max-w-[280px]">
      <div className="flex justify-between">
        <p className="text-base font-bold">
          {boardColumn.title}
        </p>
        <p className="text-xl">...</p>
      </div>

      <div className="flex flex-col space-y-4 mt-2">
        {boardColumn.elements.map((cardTask, index: number) => (
          <Droppable droppableId={`droppable-${cardTask.id}`}>
            {(provided: any) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <CardTask
                  index={index}
                  cardTask={cardTask}
                  cardId={boardColumn.id}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </div>
  )
}

export default Card;
