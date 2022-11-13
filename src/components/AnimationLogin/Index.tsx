import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation-login.json";

export function AnimationLogin() {
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
