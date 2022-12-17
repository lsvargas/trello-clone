import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import useDragAndDrop from "../../hooks/useDragAndDrop";
import Card from "../../components/board/Card";
import ICard  from "../../types/card.type";

const mockInitialColumns: ICard[] = [
  {
    id: 0,
    title: "To Do",
    elements: [
      { id: 0, title: "The user should be able to login", tags: [] },
      { id: 1, title: "The user should be able to signup", tags: [] }
    ]
  },
  {
    id: 1,
    title: "Doing",
    elements: [
      { id: 0, title: "The user should be able to login", tags: [] },
      { id: 1, title: "The user should be able to signup", tags: [] },
      { id: 2, title: "The user should be able to view dashboard", tags: [] }
    ]
  },
  {
    id: 2,
    title: "Done",
    elements: [
      { id: 0, title: "The user should be able to login", tags: [] },
      { id: 1, title: "The user should be able to signup", tags: [] },
      { id: 2, title: "The user should be able to view dashboard", tags: [] },
      { id: 3, title: "The user should be able to view profile", tags: [] }
    ]
  }
]


function Board() {
  const [boardColumns, setBoardColumns] = useState(mockInitialColumns);

  const { onDragEnd } = useDragAndDrop();

  return (
    <div className="">
      <nav className="h-16 flex justify-center bg-[#0F3460]">
        <p className="text-xl mt-4 tracking-[10px]">Fake Trello</p>
      </nav>

      <div className="flex">
        <aside className="w-16 h-screen bg-[#0F3460]">
        </aside>
        <div className="px-8 py-4 w-full">
          <div className="flex justify-between">
            <p className="text-xl mr-4 self-center">Project Team Spirit</p>
            <button
              className="border border-[#533483] rounded p-2 hover:bg-[#533483]"
              onClick={() => {}}
            >
              + Add Column
            </button>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex flex-row space-x-4 mt-8 text-black">
              {boardColumns.map((col) => (
                <Card key={col.id} boardColumn={col} />
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  )

}

export default Board;
