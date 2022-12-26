import { Draggable } from "react-beautiful-dnd";

import ICardTask from "../../../types/listTask.type";

interface ListTaskProps {
  listTask: ICardTask
  index: number;
}

function ListTask({ listTask, index  } : ListTaskProps) {

  return (
    <Draggable
      key={`${listTask.id}`}
      draggableId={`${listTask.id}`}
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
            {listTask.title}
          </p>
        </div>
      )}
    </Draggable>
  )
}

export default ListTask;
