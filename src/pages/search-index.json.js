import { getCollection } from "astro:content";
import { SITE } from "@/siteConfig";

export async function GET() {
  const docs = await getCollection("docs");

  const searchData = docs.map((doc) => {
    let contentText = "";

    const stripMDXComponentsAndMarkdown = (input = "") => {
      try {
        let text = String(input);
        text = text.replace(/^\s*(import|export)\s[^\n]*$/gim, " ");
        text = text.replace(/```[\s\S]*?```/g, " ");
        text = text.replace(/`[^`]*`/g, " ");
        text = text.replace(/!\[([^\]]*)\]\((?:[^)]+)\)/g, "$1");
        text = text.replace(/\[([^\]]+)\]\((?:[^)]+)\)/g, "$1");
        text = text.replace(/<[^>]+>/g, " ");
        text = text.replace(/^\s*#{1,6}\s*/gim, "");
        text = text.replace(/^\s*>+\s?/gim, "");
        text = text.replace(/\{[^}]*\}/g, " ");
        text = text.replace(/\s+/g, " ").trim();
        return text;
      } catch (e) {
        return String(input || "").replace(/\s+/g, " ").trim();
      }
    };

    try {
      contentText = stripMDXComponentsAndMarkdown(doc.body).substring(0, 5000);
    } catch (err) {
      console.error(`Error processing content for ${doc.id}:`, err);
    }

    return {
      title: doc.data.title,
      description: doc.data.description || "",
      content: contentText,
      url: `/docs/${doc.id.replace(/\/index$/, "")}`,
      author: SITE.author,
    };
  });

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}
