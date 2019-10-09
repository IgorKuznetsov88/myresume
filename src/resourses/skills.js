import React from "react";
import { Progress } from "antd";

const skills = {
  skills: [
    {
      skillname: "HTML5"
    },
    {
      Progress: (
        <Progress
          percent={80}
          showInfo={false}
          strokeWidth={30}
          strokeColor={{
            "0%": "#003784",
            "100%": "#00214f"
          }}
        />
      )
    },
    {
      skillname: "CSS"
    },
    {
      Progress: (
        <Progress
          percent={75}
          showInfo={false}
          strokeWidth={30}
          strokeColor={{
            "0%": "#003784",
            "100%": "#00214f"
          }}
        />
      )
    },
    {
      skillname: "JS"
    },
    {
      Progress: (
        <Progress
          percent={55}
          showInfo={false}
          strokeWidth={30}
          strokeColor={{
            "0%": "#003784",
            "100%": "#00214f"
          }}
        />
      )
    },
    {
      skillname: "React"
    },
    {
      Progress: (
        <Progress
          percent={30}
          showInfo={false}
          strokeWidth={30}
          strokeColor={{
            "0%": "#003784",
            "100%": "#00214f"
          }}
        />
      )
    }
  ]
};
export default skills;
