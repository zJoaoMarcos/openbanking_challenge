import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/animation-loading.json";

export function AnimationLoading() {
  return (
    <div className="w-full">
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
