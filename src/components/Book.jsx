
const Book = () => {
  return (
    <div id="book" className="relative">
      <img
        src="/src/assets/yehgangga.png"
        alt="pura yeh gangga"
        className="object-cover bg-gradient-to-b from-transparent via-black/60 to-black"
      />
      <div className="bg-gradient-to-b from-transparent via-black/60 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-100 shadow-lg "></div>
    </div>
  );
};

export default Book;
