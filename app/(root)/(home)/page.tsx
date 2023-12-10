import GiveawayContainer from "@/components/shared/GiveawayContainer";
import { getAllGiveaways } from "@/lib/actions/giveaway.action";

export default async function Home() {
  const results = await getAllGiveaways();
  const { data } = results;
  console.log({ data });

  return (
    <main className="">
      <div className="flex flex-col gap-8 items-start mb-8">
        <GiveawayContainer
          title="Active Giveaways"
          giveaways={JSON.parse(JSON.stringify(data))}
        />
      </div>
    </main>
  );
}
