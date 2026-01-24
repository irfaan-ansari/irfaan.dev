import { RESUME } from "@/lib/resume";
import { truncate } from "@/lib/utils";
import { ImageResponse } from "next/og";
import { Logo } from "@/components/icons/logo";

const { name } = RESUME;

const defaultDescription = `I build interactive and beautiful web applications and enjoy turning complex ideas into smooth, working experiences.`;

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]
> {
  const [{ font: regular }, { font: semibold }] = await Promise.all([
    import("./regular.json").then((mod) => mod.default || mod),
    import("./semibold.json").then((mod) => mod.default || mod),
  ]);

  return [
    {
      name: "Space_Grotesk",
      data: Buffer.from(regular, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Space_Grotesk",
      data: Buffer.from(semibold, "base64"),
      weight: 600 as const,
      style: "normal" as const,
    },
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = truncate(searchParams.get("description"), 80);

  const [fonts] = await Promise.all([loadAssets()]);

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full bg-white text-black relative"
        style={{ fontFamily: "Space_Grotesk" }}
      >
        {/* lines */}
        <div tw="flex border absolute border-neutral-200 border-dashed inset-y-0 left-16 w-[1px]" />
        <div tw="flex border absolute border-neutral-200 border-dashed inset-y-0 right-16 w-[1px]" />
        <div tw="flex border absolute border-neutral-200 inset-x-0 h-[1px] top-16" />
        <div tw="flex border absolute border-neutral-200 inset-x-0 h-[1px] bottom-16" />

        {/* squares */}
        <div tw="flex absolute bg-neutral-300 w-4 h-4 left-[56.5px] top-[56.5px]" />
        <div tw="flex absolute bg-neutral-300 w-4 h-4 right-[56.5px] top-[56.5px]" />
        <div tw="flex absolute bg-neutral-300 w-4 h-4 left-[56.5px] bottom-[56.5px]" />
        <div tw="flex absolute bg-neutral-300 w-4 h-4 right-[56.5px] bottom-[56.5px]" />

        {/* logo */}
        <div tw="flex absolute flex-row items-center justify-center bottom-28 right-28">
          <div tw="bg-black rounded-sm size-12 flex text-white items-center justify-center">
            <Logo width="36" height="36" />
          </div>
        </div>

        {/* content */}
        <div tw="flex flex-col absolute justify-center items-center inset-0 px-18 pt-20 pb-24 w-full h-full">
          <div tw="flex flex-col items-center justify-center text-center w-full h-full">
            <div tw="tracking-tight flex flex-col justify-center text-black text-balance font-semibold text-[80px]">
              {title ?? name}
            </div>
            <div tw="text-[40px] text-gray-600 mt-6 text-balance font-normal">
              {description ?? defaultDescription}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );
}
