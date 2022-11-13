import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation-register.json";

export function AnimationRegister() {
  return (
    <div className="hidden md:inline-block md:w-[340px]">
      <Player
        src={animation}
        style={{ width: "400px" }}
        autoplay
        loop
        speed={1}
      ></Player>
    </div>
  );
}
