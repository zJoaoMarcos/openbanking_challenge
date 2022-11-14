import { LogoWhite } from "../LogoWhite/Index";
import { Text } from "../Text/Index";

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-4 gap-2 bg-blue-marine shadow-xl shadow-black/75">
      <LogoWhite />
      <Text asChild>
        <a
          href="https://github.com/zJoaoMarcos"
          target="_blank"
          className="text-2xs text-gray-200 underline transition-colors hover:text-gray-100"
        >
          &copy; Developed by João Marcos
        </a>
      </Text>
    </footer>
  );
}
