import { authOptions } from "@/helper/authOptions";
import { getServerSession } from "next-auth/next";

export const getUserSession = async () => await getServerSession(authOptions);
