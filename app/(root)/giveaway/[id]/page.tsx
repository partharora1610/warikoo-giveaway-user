import AddressForm from "@/components/shared/AddressForm";
import GiveawayBanner from "@/components/shared/GiveawayBanner";
import { getGiveaway } from "@/lib/actions/giveaway.action";
import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const results = await getGiveaway({ id: params.id });
  const { data } = results;
  console.log({ data });

  const isParticipant = false;

  return (
    <div className="">
      <GiveawayBanner data={data} />
      {isParticipant ? (
        "Results will be notified via email."
      ) : (
        <AddressForm books={JSON.parse(JSON.stringify(data.books))} />
      )}
    </div>
  );
};
export default Page;
