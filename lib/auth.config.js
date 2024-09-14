import { SERVER_PROPS_GET_INIT_PROPS_CONFLICT } from "next/dist/lib/constants";

export const authConfig = {
    pages: {
        signIn: "/login",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin
                return session
            }
        },
        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            // Only admin can use admin dashboard

            if (isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            // only authenticated user view blog page

            if (isOnBlogPage && !user) {
                return false;
            }

            // only unauthenticated view login page

            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl))
            }

            return true;

        }
    }
}