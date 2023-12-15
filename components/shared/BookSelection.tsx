"use client";
import React, { useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import BookCard from "./Bookcard";

const BookSelection = (params: any) => {
  const { books, setSelectedBookId, selectedBookId } = params;

  const [selectedBook] = books.filter(
    (book: any) => book._id === selectedBookId
  );

  return (
    <div className="background-light850_dark100 px-6 py-4 custom-scrollbar">
      <h3 className="h3-semibold text-center">Select Book</h3>
      <p className="text-center mb-6">{selectedBook?.bookName}</p>
      <RadioGroup defaultValue="option-one">
        <div className="flex flex-col gap-4">
          {books.map((book: any) => {
            return (
              <div
                key={book._id}
                className={`max-w-sm mx-auto w-full bg-white rounded overflow-hidden flex items-center p-1`}
              >
                <RadioGroupItem
                  value={book.name}
                  id={book.name}
                  onClick={() => {
                    setSelectedBookId(book._id);
                  }}
                />
                <BookCard title={book.name} author={book.author} />
              </div>
            );
          })}
        </div>
      </RadioGroup>
    </div>
  );
};

export default BookSelection;
