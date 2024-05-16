import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes:[
        '/',
        '/api/webhooks/clerk',
        '/post/:id',
        '/api/webhooks/stripe',
      ],
      ignoredRoutes:[
        '/api/webhooks/clerk',
        '/api/webhooks/stripe',
        '/favicon.ico'
      ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};