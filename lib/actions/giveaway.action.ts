"use server";

import Giveaway from "@/database/Giveaway.model";
import { connectToDatabase } from "../mongoose";
import Book from "@/database/Book.model";

export const getAllGiveaways = async () => {
  try {
    connectToDatabase();

    const giveaways = await Giveaway.find({});

    return { data: giveaways };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};

export const getGiveaway = async (params: any) => {
  try {
    connectToDatabase();

    const { id } = params;
    console.log({ id });

    const giveaway = await Giveaway.findById(id).populate({
      path: "books",
      model: Book,
    });

    return { data: giveaway };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};

export const participateInGiveaway = async (params: any) => {
  try {
    connectToDatabase();
    console.log(params);

    const { giveawayId, userId } = params;

    const giveaway = await Giveaway.findByIdAndUpdate(giveawayId, {
      $push: { participants: userId },
    });

    return { data: giveaway };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};
