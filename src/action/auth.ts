"use server";
import { FieldValues } from "react-hook-form";

export const login = async (data: FieldValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    const json = await res.json();

    if (!res.ok) {
      console.error("Login failed:", json);
      throw new Error(json.message || "Login failed");
    }

    return json;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
