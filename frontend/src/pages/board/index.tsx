import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";

import { trpc } from "../../utils/trpc";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import ListTask from "../../components/board/ListTask";
import IList  from "../../types/list.type";

const mockInitialColumns: IList[] = [
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
      { id: 2, title: "The user should be able to login", tags: [] },
      { id: 3, title: "The user should be able to signup", tags: [] },
      { id: 4, title: "The user should be able to view dashboard", tags: [] }
    ]
  },
  {
    id: 2,
    title: "Done",
    elements: [
      { id: 5, title: "The user should be able to login", tags: [] },
      { id: 6, title: "The user should be able to signup", tags: [] },
      { id: 7, title: "The user should be able to view dashboard", tags: [] },
      { id: 8, title: "The user should be able to view profile", tags: [] }
    ]
  }
]


function Board() {
  const [boardLists, setBoardLists] = useState(mockInitialColumns);
  const { id } = useParams()

  const { data } = trpc.board.getBoard.useQuery({ boardId: id });
  const mutateList = trpc.list.createList.useMutation();
  const asd = trpc.list.getLists.useQuery();

  console.log(data)
  
  const addBoardColumnHandler = () => {
    mutateList.mutate({ boardId: id, name: "testing"})
  }


  const { onDragEnd } = useDragAndDrop();

  return (
    <div>
      <nav className="h-16 flex justify-center bg-[#0F3460]">
        <p className="text-xl mt-4 tracking-[10px]">Fake Trello</p>
      </nav>

      <div className="flex">
        <aside className="w-16 h-screen bg-[#0F3460]">
        </aside>
        <div className="px-8 py-4 w-full">
          <div className="flex justify-between">
            <p className="text-xl mr-4 self-center">{data?.name}</p>
            <button
              className="border border-[#533483] rounded p-2 hover:bg-[#533483]"
              onClick={addBoardColumnHandler}
            >
              + Add Column
            </button>
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex flex-row space-x-4 mt-8 text-black">
              {boardLists.map((col: IList, index: number) => (
                <Droppable key={index} droppableId={`${index}`}>
                  {(provided: any) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="py-2 px-4 border border-[#ebecf0] rounded bg-[#ebecf0] min-w-[200px] max-w-[280px] flex flex-col space-y-4 mt-2"
                    >
                      <p>{col.title}</p>
                      {col.elements.map((listTask, idx) => (
                        <ListTask key={idx} listTask={listTask} index={idx} />
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  )

}

export default Board;
