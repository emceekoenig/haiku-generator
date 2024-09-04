import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request) {
  try {
    const { topic } = await request.json();
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const prompt = `User instructions: generate a unique haiku about ${topic}`;
    const context =
      "You are a haiku poem expert. Your mission is to generate a haiku wrapped in a <div> element. Separate each line of the haiku poem with a <br />. Do not include a title. Make sure to follow the user instructions. At the end of the poem, sign the poem with 'SheCodes AI' wrapped inside a <p> element.";

    const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
      prompt
    )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    const response = await axios.get(apiUrl);
    return NextResponse.json({ poem: response.data.answer });
  } catch (error) {
    console.error("Error generating poem:", error);
    return NextResponse.json(
      { error: "Failed to generate poem" },
      { status: 500 }
    );
  }
}

// export async function POST(request) {
//   const { topic } = await request.json();
//   const apiKey = process.env.NEXT_PUBLIC_API_KEY;
//   const prompt = `User instructions: generate a unique haiku about ${topic}`;
//   const context =
//     "You are a haiku poem expert. Your mission is to generate a haiku wrapped inside a <p> element. Separate each line with a <br />. Do not include a title. Make sure to follow the user instructions. At the end of the poem, sign the poem with 'SheCodes AI'.";

//   const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
//     prompt
//   )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

//   try {
//     const response = await axios.get(apiUrl);
//     return new Response(JSON.stringify({ poem: response.data.answer }), {
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Error generating poem:", error);
//     return new Response(JSON.stringify({ error: "Failed to generate poem" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
