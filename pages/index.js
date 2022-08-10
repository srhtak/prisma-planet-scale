import { useState } from "react";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <section className="py-6 bg-coolGray-100 text-coolGray-900">
      <div
        className="
      grid
      max-w-6xl
      grid-cols-1
      px-6
      mx-auto
      lg:px-8
      md:grid-cols-2 md:divide-x
    "
      >
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Books</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="
        flex flex-col
        py-6
        space-y-6
        md:py-0 md:px-6
        ng-untouched ng-pristine ng-valid
      "
        >
          <label className="block">
            <span className="mb-1">Book Title</span>
            <input
              type="text"
              className="
              h-12
            block
            w-full
            border
            rounded-md
            shadow-sm
            focus:ring focus:ring-opacity-75
            bg-coolGray-100
          "
            />
          </label>
          <label className="block">
            <span className="mb-1">Author Name</span>
            <input
              type="email"
              className="
              h-12
            block
            border
            w-full
            rounded-md
            shadow-sm
            focus:ring focus:ring-opacity-75 
            bg-coolGray-100
          "
            />
          </label>
          <label className="block">
            <span className="mb-1">Genre</span>
            <input
              type="email"
              className="
              h-12
            block
            border
            w-full
            rounded-md
            shadow-sm
            focus:ring focus:ring-opacity-75 
            bg-coolGray-100
          "
            />
          </label>

          <button
            type="submit"
            className="
          self-center
          px-8
          py-3
          text-lg
          rounded
          text-white
          bg-black
          focus:bg-gray-700 focus:outline-none
        "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
