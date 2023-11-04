import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.7.0';
import { client } from "https://cdn.jsdelivr.net/npm/@gradio/client@0.1.4/dist/index.min.js";

const generate = document.getElementById("run");
generate.addEventListener("click", async () => {
  try {
    env.useBrowserCache = false;
    env.allowLocalModels = false;

    let pipe = await pipeline('text-classification');

    // Your existing code here...

  } catch (error) {
    console.log("Error:", error.message);
  }
});
