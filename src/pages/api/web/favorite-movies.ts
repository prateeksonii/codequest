import type { APIRoute } from "astro";
import { load } from "cheerio";

const throwError = (message: string) =>
  new Response(
    JSON.stringify({
      error: {
        message,
      },
    }),
    {
      status: 400,
    }
  );

export const post: APIRoute = async ({ request }) => {
  const { html } = (await request.json()) as { html: string };

  const $ = load(html);

  const heading = $("h1").text();

  if (!heading) {
    return throwError("No heading present");
  }

  if (heading !== "Favorite Movies") {
    return throwError("Heading text seems different than expected");
  }

  const listLength = $("ul, ol").children().length;

  if (listLength !== 5) {
    return throwError("No list with 5 items found");
  }

  return new Response(
    JSON.stringify({
      ok: true,
    })
  );
};
