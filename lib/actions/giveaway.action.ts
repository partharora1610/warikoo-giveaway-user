"use server";

import Giveaway from "@/database/Giveaway.model";
import { connectToDatabase } from "../mongoose";
import Book from "@/database/Book.model";

export const getGiveaway = async () => {};

export const getAllGiveaways = async () => {
  try {
    const giveaways = await Giveaway.find({}).populate("books");
    // .populate("participants")
    // .populate("winners");

    return { data: giveaways };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};
