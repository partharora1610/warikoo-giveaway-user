import Image from "next/image";
import React from "react";

const BookCard = ({ title, author }: { title: string; author: string }) => {
  return (
    <div className="flex gap-2 w-full p-2 bg-white">
      <Image
        src="https://m.media-amazon.com/images/I/61lJx8V4yEL._AC_UF1000,1000_QL80_.jpg"
        width={75}
        alt="Picture of the author"
        height={75}
      />
      <div className="flex flex-col gap-1">
        <h4 className="text-sm base-bold">{title}</h4>
        <p className="small-regular text-light-500">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
