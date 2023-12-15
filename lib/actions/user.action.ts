"use server";

import User from "@/database/User.model";
import { connectToDatabase } from "../mongoose";
// import { revalidatePath } from "next/cache";

export const getUserByClerkId = async (params: any) => {
  try {
    connectToDatabase();
    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });

    return { data: user };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};

export const createUsers = async (params: any) => {
  try {
    connectToDatabase();
    const { userData } = params;

    const user = await User.create(userData);

    return { data: user };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};

export const updateUser = async (params: any) => {
  try {
    connectToDatabase();

    const { clerkId, updateData } = params;

    const updatedUser = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    // revalidatePath("/profile/[id]", updatedUser._id);
    return { data: updatedUser };
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};

export const deleteUser = async (params: any) => {
  try {
    connectToDatabase();
  } catch (error) {
    console.log(error);
    return { data: error };
  }
};
