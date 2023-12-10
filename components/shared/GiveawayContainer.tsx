import React from "react";
import Giveawaycard from "./Giveawaycard";

type GiveawayContainerProps = {
  title: string;
  //   giveaways: any;
};

const GiveawayContainer = ({ title }: GiveawayContainerProps) => {
  //   console.log({ giveaways });

  return (
    <div className="mb-8">
      <h2 className="h3-bold mb-4">{title}</h2>
      <div className="flex gap-10">
        {/* {giveaways?.map((giveaway: any, index: number) => {
          return (
            <Giveawaycard
              key={index}
              title={giveaway.title}
              books={giveaway.books}
              maxWinners={giveaway.maxWinners}
              // participants={giveaway.participants}
              // winners={giveaway.winners}
              // endDate={giveaway.endDate}
              // startDate={giveaway.startDate}
              id={giveaway._id}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default GiveawayContainer;
