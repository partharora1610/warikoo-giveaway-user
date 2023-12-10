"use server";

import Giveaway from "@/database/Giveaway.model";
import { connectToDatabase } from "../mongoose";

export const getGiveaway = async () => {};

export const getAllGiveaways = async () => {
  try {
    connectToDatabase();
    const giveaways = await Giveaway.find({}).populate("books");

    return { data: giveaways };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};

export const participateInGiveaway = async ({ giveawayId, userId }: any) => {
  try {
    connectToDatabase();
    const giveaway = await Giveaway.findById(giveawayId);
    giveaway.participants.push(userId);

    await giveaway.save();

    return { data: giveaway };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};
