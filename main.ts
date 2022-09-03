import { serve } from "https://deno.land/std@0.154.0/http/server.ts";
serve(() => new Response("Hello World\n"));

console.log("Welcome to Deno!");
