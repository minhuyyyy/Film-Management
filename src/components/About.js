import React from "react";
import { Collapsible, CollapsibleItem, Icon } from "react-materialize";
export default function About() {
  return (
    <Collapsible accordion popout>
      <CollapsibleItem
        className="about"
        expanded={false}
        header="HuyTTM"
        icon={<Icon>person</Icon>}
        node="div"
      >
        Passionate software developer with a knack for turning complex problems
        into elegant solutions.
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header="Education"
        icon={<Icon>school</Icon>}
        node="div"
      >
        FPT University. Since 2021-Now
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header="Experience"
        icon={<Icon>science</Icon>}
        node="div"
      >
        Experienced in front-end web development with knowledge in JavaScript,
        ReactJS, Bootstrap, CSS. Basic knowledge in Java, Python.
      </CollapsibleItem>
    </Collapsible>
  );
}
