import Controls from "./controls.js"; // Default import
import Timer from "./timer.js"; // named import
import Sound from "./sounds.js";
import Events from "./events.js";

import { 
  buttonPlay,
  buttonStop,
  buttonPause,
  buttonSet,
  minutesDisplay,
  secondsDisplay
 } from "./elements.js";

const controls = Controls ({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound();

//Event-driven: a DOM é event-driven, ou seja, direcionada à eventos.
//Callback.
//Programação declarativa: Só falo o que deve ser feito.
//Programação imperativa: Falo como, o que deve ser feito.

Events({controls, timer, sound});