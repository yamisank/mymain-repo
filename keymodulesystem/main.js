import shoot from "./action.js";
import redes from "./colorchange.js";
import { pause, play } from "./menu.js";
import { jump, moveLeft } from "./movement.js";

document.addEventListener("keyup", (event) => {
  console.log(event.key);
  switch (event.key) {
    case "w":
      jump();
      redes()
      break;
    case "c":
      shoot();
      break;
    case "ArrowLeft":
      moveLeft();
      break;
    case "Escape":
      pause();
      break;
    case "Enter":
      play();
      break;
    default:
      break;
  }
});
