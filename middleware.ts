import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // will protect routes later
  publicRoutes: ["/", "/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
});

export const config = {
  // matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
