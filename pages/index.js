import { useEffect, useState } from "react";

export default function Home() {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [APIResponse, setAPIResponse] = useState(null);

  const readDB = async () => {
    try {
      const allBooks = await fetch("api/hello", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setAPIResponse(await allBooks.json());
      if (response.status !== 200) {
        console.log("Error reading books");
      } else {
        console.log("Books readed");
        console.log(allBooks);
      }
    } catch (error) {
      console.error("Request error", error);
    }
  };

  const resetForm = () => {
    setBookTitle("");
    setBookAuthor("");
    setBookGenre("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { bookTitle, bookAuthor, bookGenre };
    try {
      const response = await fetch("api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log("Error adding book");
      } else {
        resetForm();
        readDB();
        console.log("Book added");
      }
    } catch (error) {
      console.error("Request error", error);
    }
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
          <div>
            {APIResponse?.map((book) => (
              <h1 key={book.id}>{book.bookTitle}</h1>
            ))}
          </div>
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
              onChange={(e) => setBookTitle(e.target.value)}
              type="text"
              className="
              h-12
            block
            px-4
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
              onChange={(e) => setBookAuthor(e.target.value)}
              className="
              h-12
              px-4
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
              onChange={(e) => setBookGenre(e.target.value)}
              className="
              h-12
              px-4
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
