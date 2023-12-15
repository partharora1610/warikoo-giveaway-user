import axios from "axios";

export const getBookData = async (bookName: string) => {
  const bookNameWithPlus = addPlusBetweenWords(bookName);

  const response = await axios.get(
    `https://openlibrary.org/search.json?title=${bookNameWithPlus}`
  );

  return { data: response.data.docs[0], isbn: response.data.docs[0].isbn[0] };
};

export const getBookCover = async (isbn: string) => {
  const response = await axios.get(
    `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`,
    { responseType: "arraybuffer" }
  );
  return response;
};

const addPlusBetweenWords = (inputString: string): string => {
  return inputString.toLowerCase().split(" ").join("+");
};
