import AddressForm from "@/components/shared/AddressForm";
import GiveawayBanner from "@/components/shared/GiveawayBanner";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getGiveaway } from "@/lib/actions/giveaway.action";
import React from "react";
import { auth } from "@clerk/nextjs";
import { getUserByClerkId } from "@/lib/actions/user.action";

const Page = async ({ params }: { params: { id: string } }) => {
  const { userId } = auth();

  const user = await getUserByClerkId({ userId });

  const results = await getGiveaway({ id: params.id });
  const { data } = results;

  const isParticipant = user.data?.giveaways.includes(params.id);
  console.log({ isParticipant });

  return (
    <div className="">
      <GiveawayBanner data={data} />
      {isParticipant ? (
        <div className="flex justify-center">
          <WaitCard />
        </div>
      ) : (
        <AddressForm
          books={JSON.parse(JSON.stringify(data.books))}
          userId={userId}
          giveawayId={params.id}
        />
      )}
    </div>
  );
};

const WaitCard = () => {
  return (
    <Card className="max-w-md  bg-white rounded-xl md:max-w-2xl m-4 shadow-none  border-none">
      <CardContent className="p-8">
        <Alert className="shadow-none border-none">
          <AwardIcon className="w-4 h-4" />
          <AlertTitle className="text-lg font-semibold">
            Congratulations!
          </AlertTitle>
          <AlertDescription className="text-gray-500 dark:text-gray-400">
            You have successfully participated in the giveaway. You will be
            notified via email about the results.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

function AwardIcon(props: any) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export default Page;
