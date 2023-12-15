"use client";

import { getBookCover, getBookData } from "@/lib/getBookData";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BookCard = (params: any) => {
  const [image, setImage] = useState("");

  const { title, author } = params;

  useEffect(() => {
    getBookData(title).then((response) => {
      getBookCover(response.isbn).then((res) => {
        const blob = new Blob([res.data], { type: "image/jpg" });
        const imageUrl = URL.createObjectURL(blob);
        setImage(imageUrl);
      });
    });
  }, []);

  return (
    <Card className="border-none">
      <CardHeader>
        <div className="flex gap-4">
          {image != "" ? (
            <Image src={image} alt="" width={75} height={50} />
          ) : (
            <p className="small-regular text-gray-300">Loading...</p>
          )}

          <CardTitle>
            <p className="base-medium">{title}</p>
            <p className="small-medium text-gray-500">{author}</p>
          </CardTitle>
        </div>
      </CardHeader>
    </Card>
  );
};

export default BookCard;
