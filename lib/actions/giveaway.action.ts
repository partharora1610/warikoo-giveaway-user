"use server";

import Giveaway from "@/database/Giveaway.model";
import { connectToDatabase } from "../mongoose";
import Book from "@/database/Book.model";
import User from "@/database/User.model";
import Participate from "@/database/Participant.model";
import { revalidatePath } from "next/cache";

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
    // console.log({ params });

    const { giveawayId, userId, bookId } = params;

    const user = await User.findOne({ clerkId: userId });
    const giveaway = await Giveaway.findById(giveawayId);

    // console.log({ user, giveaway });

    if (!user) {
      return { data: "User not found" };
    }

    const alreadyParticipated = await Participate.findOne({
      giveaway: giveaway._id,
      user: user._id,
    });

    const updatedUser = await User.findByIdAndUpdate(user._id, {
      $push: { giveaways: giveaway._id },
    });

    if (!(alreadyParticipated == null)) {
      return { data: "Only one entry per user is allowed in the giveaway" };
    }

    const participate = await Participate.create({
      giveaway: giveaway._id,
      user: user._id,
      book: bookId,
    });
    // console.log({ participate });

    const updatedGiveaway = await Giveaway.findByIdAndUpdate(giveaway._id, {
      $push: { participants: participate._id },
    });
    // console.log({ updatedGiveaway });

    // revalidatePath to update the cache
    // revalidatePath("")
    return { data: updatedGiveaway };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};
