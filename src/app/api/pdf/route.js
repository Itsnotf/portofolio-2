import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const buffer = await readFile(
    path.join(
      process.cwd(),
      "public/assets",
      "PORTFOLIO_FAIZ_AFLAH_HAFIZUDDIN.pdf"
    )
  );

  const headers = new Headers();
  headers.append(
    "Content-Disposition",
    'attachment; filename="PORTFOLIO_FAIZ_AFLAH_HAFIZUDDIN.pdf"'
  );
  headers.append("Content-Type", "image/pdf");

  return new Response(buffer, {
    headers,
  });
}
