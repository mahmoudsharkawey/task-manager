"use client";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks } from "../redux/tasksSlice";

const Modal = ({ isVisible, onClose }: any) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.tasks.items);

  const hundeAdd = (e: any) => {
    e.preventDefault();
    if (!title || !des) return;
    dispatch(addTasks({ id: tasks.length + 1, title: title, des }));
    setTitle("");
    setDes("");
  };


  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center transition duration-300">
      <div className="w-[500px] rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12 transition duration-300">
        <form action="#" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">
              Title
            </label>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
              id="title"
              className="w-full rounded-lg text-black border-2 border-solid border-black p-3 text-sm placeholder-black "
              placeholder="Title"
              type="text"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="message">
              description
            </label>

            <textarea
              onChange={(e) => {
                setDes(e.target.value);
              }}
              value={des}
              className="w-full h-72  text-black rounded-lg border-2 border-solid border-black p-3 text-sm placeholder-black"
              placeholder="Description"
              id="Description"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              onClick={hundeAdd}
              type="submit"
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto mr-5"
            >
              Add Task
            </button>
            <button
              onClick={onClose}
              type="submit"
              className="inline-block w-full rounded-lg px-5 py-3 font-medium text-black sm:w-auto"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
