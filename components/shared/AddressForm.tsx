"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import BookSelection from "./BookSelection";

import { participateInGiveaway } from "@/lib/actions/giveaway.action";
import { revalidatePath } from "next/cache";

const formSchema = z.object({
  // fullname: z.string().min(2, {
  //   message: "Fullname must be at least 2 characters.",
  // }),
  // contactNumber: z.string().min(10, {
  //   message: "Contact number must be at least 10 characters.",
  // }),
  // pincode: z.string().min(6, {
  //   message: "Pincode must be at least 6 characters.",
  // }),
  // houseNo: z.string().min(2, {
  //   message: "House number must be at least 2 characters.",
  // }),
  // area: z.string().min(2, {
  //   message: "Area must be at least 2 characters.",
  // }),
  // landmark: z.string().min(2, {
  //   message: "Landmark must be at least 2 characters.",
  // }),
  // city: z.string().min(2, {
  //   message: "City must be at least 2 characters.",
  // }),
  // state: z.string().min(2, {
  //   message: "State must be at least 2 characters.",
  // }),
  // country: z.string().min(2, {
  //   message: "Country must be at least 2 characters.",
  // }),
  fullname: z.string(),
  contactNumber: z.string(),
  pincode: z.string(),
  houseNo: z.string(),
  area: z.string(),
  landmark: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
});

function AddressForm(params: any) {
  const [selectedBookId, setSelectedBookId] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      country: "",
      contactNumber: "",
      pincode: "",
      houseNo: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log({ ...values, bookId: selectedBookId });

    await participateInGiveaway({
      bookId: selectedBookId,
      userId: params.userId,
      giveawayId: params.giveawayId,
      userAddress: {
        country: values.country,
        contactNumber: values.contactNumber,
        pincode: values.pincode,
        houseNo: values.houseNo,
        area: values.area,
        landmark: values.landmark,
        city: values.city,
        state: values.state,
      },
    });

    form.reset();

    setSelectedBookId("");
    revalidatePath(`/giveaway/${params.giveawayId}`);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fullname</FormLabel>
                    <FormControl>
                      <Input placeholder="fullname" {...field} />
                    </FormControl>
                    <FormDescription>
                      <p className="text-light-400">
                        Your order will be placed by this name
                      </p>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Contact Number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pincode</FormLabel>
                      <FormControl>
                        <Input placeholder="pincode" type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="houseNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>House No</FormLabel>
                    <FormControl>
                      <Input placeholder="House No" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Area</FormLabel>
                    <FormControl>
                      <Input placeholder="Area" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="landmark"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Landmark</FormLabel>
                    <FormControl>
                      <Input placeholder="Landmark" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between">
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input placeholder="State" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country</FormLabel>
                      <FormControl>
                        <Input placeholder="Country" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-indigo-500 text-white hover:bg-indigo-600"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
        <BookSelection
          books={params.books}
          setSelectedBookId={setSelectedBookId}
          selectedBookId={selectedBookId}
        />
      </div>
    </>
  );
}

export default AddressForm;
