import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { Button } from "../ui/button";
import Link from "next/link";

const Giveawaycard = (params: any) => {
  const {
    title,
    books,
    maxWinners,
    id,
    // participants,
    // winners,
    // endDate,
    // startDate,
  } = params;

  const totalBooks = books.length;

  return (
    <Card>
      <CardHeader>
        <Image width={100} height={100} src="" alt="warikoo image" />
        <CardTitle>
          <h3 className="h3-semibold">{title}</h3>
        </CardTitle>
        <CardDescription className="base-regular">
          <p>234 participants</p>
          <p>{maxWinners}</p>
          <p>ends in 42 hours</p>
        </CardDescription>
      </CardHeader>
      {/* <CardContent>
          here we can show that how many books are there in the giveaway
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter>
        <div className="flex items-center justify-end">
          <Link href={`giveaway/${id}`}>
            <Button className="bg-blue-400 text-white">Participate</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Giveawaycard;
