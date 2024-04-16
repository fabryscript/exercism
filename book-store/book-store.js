export const cost = (books) => {
  const total = books.length * 800;
  const discounts = [0, 0, 0.05, 0.1, 0.2, 0.25];
  const books_set = [];

  while (books.length > 0) {
    const set = new Set(books);

    books_set.push(set.size);
    for (const book of set) {
      books.splice(books.indexOf(book), 1);
    }
  }

  while (books_set.includes(3) && books_set.includes(5)) {
    books_set.splice(books_set.indexOf(3), 1);
    books_set.splice(books_set.indexOf(5), 1);
    books_set.push(4, 4);
  }

  return (
    total -
    books_set.reduce((prev, curr) => prev + discounts[curr] * 800 * curr, 0)
  );
};
