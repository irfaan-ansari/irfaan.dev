"use server";
import { z } from "zod";
import {
  BookCallFormType,
  bookCallSchema,
  ContactFormType,
  contactSchema,
} from "@/lib/formSchema";
import { Counter } from "counterapi";
import { CounterData } from "@/lib/types";

// hanlde contact form submision
export const contactSubmit = async (data: ContactFormType) => {
  // check for api endpoint
  const URL = process.env.GOOGLE_SHEET_CONTACT_URL!;
  if (!URL) return { success: false, message: "API endpoint is missing." };

  // validate data
  const { success: valid, error } = contactSchema.safeParse(data);
  if (!valid) return { success: false, message: z.prettifyError(error) };

  // send request
  const { success, message } = await postData(URL, data);
  if (success) return { success, message: "Message sent successfully!" };

  return { success, message };
};

// hanlde book call submission
export const bookCall = async (data: BookCallFormType) => {
  // check for api endpoint
  const URL = process.env.GOOGLE_SHEET_CALL_URL!;
  if (!URL) return { success: false, message: "API endpoint is missing." };

  // validate data
  const { success: valid, error } = bookCallSchema.safeParse(data);
  if (!valid) return { success: false, message: z.prettifyError(error) };

  // send request
  const { success, message } = await postData(URL, data);
  if (success) return { success, message: "Message sent successfully!" };

  return { success, message };
};

const postData = async <T>(url: string, data: T) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return { success: false, message: errorText };
    }

    return { success: true, message: "success" };
  } catch (error: any) {
    console.error("Fetch error:", error);
    return {
      success: false,
      message: error?.message || "Internal server error",
    };
  }
};
export interface CounterResponse {
  data: CounterData | null;
  error?: any;
}
const counter = new Counter({
  workspace: "personal-portfolio-workspace",
  debug: false,
  timeout: 5000,
  accessToken: "ut_CO7mKdMGiBwIMmKnCviSO4dlRQxFzl2NYPQOfeVo",
});

// Track an event
export async function trackViews(): Promise<CounterResponse> {
  "use cache";
  try {
    const result = await counter.up("portfolio-view-count");

    return result as unknown as CounterResponse;
  } catch (error) {
    return {
      data: null,
      error,
    };
  }
}
