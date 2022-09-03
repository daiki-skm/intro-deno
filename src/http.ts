import { serve } from "https://deno.land/std@0.154.0/http/server.ts";

function handler1(): Response {
  return new Response("Hello, World!");
}

async function handler2(req: Request): Promise<Response> {
  console.log("Method: ", req.method);

  const url = new URL(req.url);
  console.log("Path: ", url.pathname);
  console.log("Query parameters: ", url.searchParams);

  console.log("Headers: ", req.headers);

  if (req.body) {
    const body = await req.text();
    console.log("Body: ", body);
  }

  return new Response("Hello, World!");
}

function handler3(): Response {
  const body = JSON.stringify({ message: "NOT FOUND" });
  return new Response(body, {
    status: 404,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  });
}

function handler4(): Response {
  let timer: number;
  const body = new ReadableStream({
    async start(controller) {
      timer = setInterval(() => {
        controller.enqueue("Hello, World!\n");
      }, 1000);
    },
    cancel() {
      clearInterval(timer);
    },
  });
  return new Response(body.pipeThrough(new TextEncoderStream()), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}

serve(handler4, { port: 4242 });
