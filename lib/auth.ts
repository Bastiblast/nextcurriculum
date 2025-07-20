import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import sendEmail from "@/app/mail/sendEmail";
// If your Prisma file is located elsewhere, you can change the path

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
     trustedOrigins: ['http://localhost:5432','https://devhub.lionside.fr'],
        //...other options
      //     plugins: [nextCookies()], 
    emailAndPassword: {  
        enabled: true,
    sendResetPassword: async ({user, url}) => {
      await sendEmail({
        to: user.email,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
      });
    },
    onPasswordReset: async ({ user }: { user: { email: string } }) => {
      // your logic here
      console.log(`Password for user ${user.email} has been reset.`);
    },
    },
});
