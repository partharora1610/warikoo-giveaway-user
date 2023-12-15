import Image from "next/image";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

const GiveawayBanner = (params: any) => {
  const {
    title,
    books,
    participants,
    winners,
    maxWinners,
    archived,
    startDtae,
    endDate,
  } = params.data;

  // const timeLeft = endDate - Date.now();
  const timeLeft = 10;

  return (
    <div className="col-span-3 mb-16">
      <div className="flex gap-8">
        <Image
          src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/07/DSC00004-min-2-scaled.jpg?fit=2560%2C1707&ssl=1"
          alt="image"
          width={400}
          height={100}
        />

        <div>
          <Card className=" bg-white md:max-w-2xl border-none shadow-none">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold text-indigo-900">
                {title}
              </h2>
              <p className="mt-2 text-gray-500 mb-8">
                Participate and stand a chance to win exciting prizes. Winners
                will be announced via mails.
              </p>
              <div className="mt-4 flex items-center gap-12">
                <Badge className="text-indigo-600 bg-indigo-50 rounded-full px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <UserIcon className="w-4 h-4" />
                    <span>Participants: {participants.length}</span>
                  </div>
                </Badge>
                <Badge className="text-indigo-600 bg-indigo-50 rounded-full px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <TrophyIcon className="w-4 h-4" />
                    <span>Max Winners: {maxWinners}</span>
                  </div>
                </Badge>
                <Badge className="text-indigo-600 bg-indigo-50 rounded-full px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <ClockIcon className="w-4 h-4" />
                    <span>Time Remaining: {timeLeft} Days</span>
                  </div>
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default GiveawayBanner;
