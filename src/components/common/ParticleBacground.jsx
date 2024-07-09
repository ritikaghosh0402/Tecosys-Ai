/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.



const ParticlesComponent = ({ id }) => {
  
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      // particles: {
      //   color: {
      //     value: "#FFFFFF",
      //   },
      //   links: {
      //     color: "#FFFFFF",
      //     distance: 150,
      //     enable: true,
      //     opacity: 0.3,
      //     width: 1,
      //   },
      //   move: {
      //     direction: "none",
      //     enable: true,
      //     outModes: {
      //       default: "bounce",
      //     },
      //     random: true,
      //     speed: 1,
      //     straight: false,
      //   },
      //   number: {
      //     density: {
      //       enable: true,
      //     },
      //     value: 150,
      //   },
      //   opacity: {
      //     value: 1.0,
      //   },
      //   shape: {
      //     type: "circle",
      //   },
      //   size: {
      //     value: { min: 1, max: 3 },
      //   },
      // },
      "particles": {
        "bounce": {
          "horizontal": {
            "value": 1
          },
          "vertical": {
            "value": 1
          }
        },
        "collisions": {
          "absorb": {
            "speed": 2
          },
          "bounce": {
            "horizontal": {
              "value": 1
            },
            "vertical": {
              "value": 1
            }
          },
          "enable": false,
          "maxSpeed": 50,
          "mode": "bounce",
          "overlap": {
            "enable": true,
            "retries": 0
          }
        },
        "color": {
          "value": "#ff0000",
          "animation": {
            "h": {
              "count": 0,
              "enable": true,
              "speed": 50,
              "decay": 0,
              "delay": 0,
              "sync": false,
              "offset": 0
            },
            "s": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": true,
              "offset": 0
            },
            "l": {
              "count": 0,
              "enable": false,
              "speed": 1,
              "decay": 0,
              "delay": 0,
              "sync": true,
              "offset": 0
            }
          }
        },
        "effect": {
          "close": true,
          "fill": true,
          "options": {},
          "type": []
        },
        "groups": {},
        "move": {
          "angle": {
            "offset": 0,
            "value": 90
          },
          "attract": {
            "distance": 200,
            "enable": false,
            "rotate": {
              "x": 3000,
              "y": 3000
            }
          },
          "center": {
            "x": 50,
            "y": 50,
            "mode": "percent",
            "radius": 0
          },
          "decay": 0,
          "distance": {},
          "direction": "none",
          "drift": 0,
          "enable": true,
          "gravity": {
            "acceleration": 9.81,
            "enable": false,
            "inverse": false,
            "maxSpeed": 50
          },
          "path": {
            "clamp": true,
            "delay": {
              "value": 0
            },
            "enable": false,
            "options": {}
          },
          "outModes": {
            "default": "out",
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "random": false,
          "size": false,
          "speed": 2,
          "spin": {
            "acceleration": 0,
            "enable": false
          },
          "straight": false,
          "trail": {
            "enable": false,
            "length": 10,
            "fill": {}
          },
          "vibrate": false,
          "warp": false
        },
        "number": {
          "density": {
            "enable": true,
            "width": 1920,
            "height": 1080
          },
          "limit": {
            "mode": "delete",
            "value": 0
          },
          "value": 100
        },
        "opacity": {
          "value": {
            "min": 0.3,
            "max": 0.8
          },
          "animation": {
            "count": 0,
            "enable": true,
            "speed": 0.5,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "mode": "auto",
            "startValue": "random",
            "destroy": "none"
          }
        },
        "reduceDuplicates": false,
        "shadow": {
          "blur": 0,
          "color": {
            "value": "#000"
          },
          "enable": false,
          "offset": {
            "x": 0,
            "y": 0
          }
        },
        "shape": {
          "close": true,
          "fill": true,
          "options": {},
          "type": "circle"
        },
        "size": {
          "value": {
            "min": 1,
            "max": 3
          },
          "animation": {
            "count": 0,
            "enable": true,
            "speed": 3,
            "decay": 0,
            "delay": 0,
            "sync": false,
            "mode": "auto",
            "startValue": "random",
            "destroy": "none"
          }
        },
        "stroke": {
          "width": 0
        },
        "zIndex": {
          "value": 0,
          "opacityRate": 1,
          "sizeRate": 1,
          "velocityRate": 1
        },
        "destroy": {
          "bounds": {},
          "mode": "none",
          "split": {
            "count": 1,
            "factor": {
              "value": 3
            },
            "rate": {
              "value": {
                "min": 4,
                "max": 9
              }
            },
            "sizeOffset": true,
            "particles": {}
          }
        },
        "roll": {
          "darken": {
            "enable": false,
            "value": 0
          },
          "enable": false,
          "enlighten": {
            "enable": false,
            "value": 0
          },
          "mode": "vertical",
          "speed": 25
        },
        "tilt": {
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false
          },
          "direction": "clockwise",
          "enable": false
        },
        "twinkle": {
          "lines": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          },
          "particles": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          }
        },
        "wobble": {
          "distance": 5,
          "enable": false,
          "speed": {
            "angle": 50,
            "move": 10
          }
        },
        "life": {
          "count": 0,
          "delay": {
            "value": 0,
            "sync": false
          },
          "duration": {
            "value": 0,
            "sync": false
          }
        },
        "rotate": {
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false
          },
          "direction": "clockwise",
          "path": false
        },
        "orbit": {
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "delay": 0,
            "sync": false
          },
          "enable": false,
          "opacity": 1,
          "rotation": {
            "value": 45
          },
          "width": 1
        },
        "links": {
          "blink": false,
          "color": {
            "value": "random"
          },
          "consent": false,
          "distance": 100,
          "enable": true,
          "frequency": 1,
          "opacity": 1,
          "shadow": {
            "blur": 5,
            "color": {
              "value": "#000"
            },
            "enable": false
          },
          "triangles": {
            "enable": false,
            "frequency": 1
          },
          "width": 1,
          "warp": false
        },
        "repulse": {
          "value": 0,
          "enabled": false,
          "distance": 1,
          "duration": 1,
          "factor": 1,
          "speed": 1
        }
      },
      detectRetina: true,
    }),
    [],
  );

  return <Particles id={id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;