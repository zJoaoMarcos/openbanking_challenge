import { Link } from "react-router-dom";
import { AnimationLogin } from "../components/AnimationLogin/Index";
import { FormLogin } from "../components/FormLogin/Index";
import { Heading } from "../components/Heading/Index";
import { Logo } from "../components/Logo/Index";
import { Text } from "../components/Text/Index";

export function Login() {
  return (
    <div className="w-screen h-screen flex flex-rol items-center justify-center md:justify-evenly md:gap-4 px-5 bg-gray-100">
      <AnimationLogin />
      <div className="w-[320px] sm:w-[380px] flex flex-col justify-center items-center px-4 py-6 gap-3 rounded bg-white drop-shadow-xl shadow-green-ocean">
        <Logo />

        <Heading className="mt-4 text-green-ocean">Login</Heading>

        <FormLogin />

        <footer className="mt-8">
          <Text asChild size="sm">
            <span>
              Não tem uma conta?{" "}
              <Link to="/register" className="text-red-300 underline">
                Crie uma agora!
              </Link>
            </span>
          </Text>
        </footer>
      </div>
    </div>
  );
}
