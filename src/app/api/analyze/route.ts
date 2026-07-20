import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groq";
import { SYSTEM_PROMPT } from "@/lib/prompt";
import { getGithubProfile } from "@/lib/github";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const githubData = await getGithubProfile(body.github);
    // console.log(githubData);

    const prompt = `
User Inputs

GitHub Profile:
${JSON.stringify(githubData, null, 2)}

LinkedIn:
${body.linkedin || "Not provided"}

Portfolio:
${body.portfolio || "Not provided"}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.3,

      response_format: {
        type: "json_object",
      },

      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const text = completion.choices[0].message.content ?? "{}";

    try {
      const parsed = JSON.parse(text);
      console.log(JSON.stringify(parsed, null, 2));

      return NextResponse.json(parsed);
    } catch {
      console.error("Invalid JSON returned by Groq:");
      console.error(text);

      return NextResponse.json(
        {
          error: "AI returned invalid JSON.",
        },
        {
          status: 500,
        },
      );
    }
  } catch (err: any) {
    console.error("Groq Error:", err);

    return NextResponse.json(
      {
        error: err?.message ?? "Failed to analyze profile.",
      },
      {
        status: 500,
      },
    );
  }
}
