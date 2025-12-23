import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2";
import fetch from "node-fetch";

setGlobalOptions({ maxInstances: 10 });

export const n8nWebhook = onRequest(
  { cors: true },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    try {
      const response = await fetch(
        "https://n8n.yoimedia.fun/webhook/5d7c4fa8-e60b-47b8-9084-6d3c98d31e86",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        }
      );

      const text = await response.text();
      res.status(200).send(text);
    } catch (error) {
      console.error("n8n proxy error:", error);
      res.status(500).send("Webhook proxy failed");
    }
  }
);
