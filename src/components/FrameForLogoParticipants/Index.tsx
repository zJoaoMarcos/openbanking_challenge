import * as Avatar from "@radix-ui/react-avatar";
import { Spinner } from "phosphor-react";

interface FrameForImage {
  urlImage: string;
  alt: string;
}

export function FrameForLogoParticipants({ urlImage, alt }: FrameForImage) {
  return (
    <div>
      <Avatar.Root className="w-10 md:w-16 h-10 md:h-16 inline-flex items-center justify-center align-middle overflow-hidden rounded-full shadow-md shadow-black/40">
        <Avatar.Image
          className="w-full h-full object-scale-down"
          src={urlImage}
          alt={`Logotipo da ${alt}`}
        />
        <Avatar.Fallback
          className=" flex justify-center items-center bg-transparent etext-sm animate-spin-slow"
          delayMs={600}
        >
          <Spinner size={32} color="#9e9e9e" />
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
}
