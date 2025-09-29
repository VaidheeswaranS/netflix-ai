import OpenAI from "openai";
import { GPT_API_KEY } from "./constants";

const openai = new OpenAI({
  // Using openRouter as it gives free API keys and can use any models that is free
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: GPT_API_KEY,
  dangerouslyAllowBrowser: true,
  defaultHeaders: {},
});

export default openai;
