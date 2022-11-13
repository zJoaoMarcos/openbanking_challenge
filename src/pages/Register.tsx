import { Link } from "react-router-dom";
import { AnimationRegister } from "../components/AnimationRegister/Index";
import { FormRegister } from "../components/FormRegister/Index";
import { Heading } from "../components/Heading/Index";
import { Logo } from "../components/Logo/Index";
import { Text } from "../components/Text/Index";

export function Register() {
  return (
    <div className="w-screen h-screen flex flex-rol items-center justify-center md:justify-evenly md:gap-4 px-5 bg-gray-100">
      <AnimationRegister />
      <div className="w-[320px] sm:w-[380px] flex flex-col justify-center items-center px-4 py-6 gap-3 rounded bg-white drop-shadow-xl shadow-green-ocean">
        <Logo />

        <Heading className="mt-4 text-green-ocean">Cadastrar</Heading>

        <FormRegister />

        <footer className="mt-8">
          <Text asChild size="sm">
            <span>
              Ja tem uma conta?{" "}
              <Link to="/" className="text-red-300 underline">
                Entre agora!
              </Link>
            </span>
          </Text>
        </footer>
      </div>
    </div>
  );
}
