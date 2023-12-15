import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // will protect routes later
  publicRoutes: [
    "/",
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/api/webhooks(.*)",
  ],
});

export const config = {
  // matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
