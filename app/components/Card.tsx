import { Pencil, Trash2, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { delTasks, UpDateTasks } from "../redux/tasksSlice";
import { useState } from "react";


const Card = () => {
    // update  state  for input field and tasks array
  const [updatetitle, setUpdateTitle] = useState("");
  const [updatedes, setUpdateDes] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.items);
  const [showEdit, setShowEdit] = useState(false);
  const [id, setId] = useState(null);

  return (
    <>
      {tasks.length > 0
        ? tasks.map((tasks: any) => (
            <div
              key={tasks.id}
              className="p-1 border-primary rounded-lg hover:border hover:transition hover:shadow-md hover:cursor-pointer"
            >
              <article className="rounded-lg border  border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                <a href="#">
                  {showEdit && id == tasks.id ? (
                    <X onClick={() => setShowEdit(false)} />
                  ) : null}

                  {showEdit && id == tasks.id ? (
                    <input
                      onChange={(e) => setUpdateTitle(e.target.value)}
                      id="title"
                      className="w-full rounded-lg text-black border-2 border-solid border-black p-3 text-sm placeholder-black "
                      placeholder="Title"
                      type="text"
                    />
                  ) : (
                    <h3 className="line-clamp-3  mt-0.5 text-lg font-medium text-white-900">
                      {tasks.title}
                    </h3>
                  )}
                </a>

                {showEdit && id == tasks.id ? (
                  <textarea
                    onChange={(e) => setUpdateDes(e.target.value)}
                    className="w-full h-33  text-black rounded-lg border-2 border-solid border-black p-3 text-sm placeholder-black"
                    placeholder="Description"
                    id="Description"
                  ></textarea>
                ) : (
                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-300">
                    {tasks.des}
                  </p>
                )}
                {showEdit && id == tasks.id ? (
                  <button
                    onClick={() => {
                      dispatch(
                        UpDateTasks({
                          id: tasks.id,
                          title: updatetitle,
                          des: updatedes,
                        })
                      );
                      setShowEdit(false);
                    }}
                  >
                    Update
                  </button>
                ) : null}
                <br />
        
              </article>
              <div className="flex justify-end gap-3 mt-4 p-2">
                <a>
                  <Trash2
                    className="hover:fill-red-500"
                    onClick={() => dispatch(delTasks(tasks.id))}
                    fill="black"
                  />
                </a>
                <a>
                  <Pencil
                    onClick={() => {
                      setShowEdit(true);
                      setId(tasks.id);
                    }}
                    className="hover:fill-[#0d9488]"
                    fill="black"
                  />
                </a>
              </div>
            </div>
          ))
        : "There is no tasks"}
    </>
  );
};

export default Card;
