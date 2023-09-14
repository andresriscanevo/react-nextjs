import React from "react";
import cardCarrouselText from "../components/cardCarrouselText";

function About() {
  const itemcard = {
    title: "React Canarie",
    textshort:
      "Wed like to offer the React community an option to adopt individual new features as soon as their design is close to final, before they’re released in a stable version—similar to how Meta has long used bleeding-edge versions of React internally. We are introducing ",
    picture:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  };

  return (
    <div>
      <h2 className="font-bold text-slate-200 ">React Blog</h2>
      <p>
        This blog is the official source for the updates from the React team.
        Anything important, including release notes or deprecation notices, will
        be posted here first. You can also follow the @reactjs account on
        Twitter, but you won’t miss anything essential if you only read this
        blog.
      </p>
      <div>
        <cardCarrouselText item={itemcard} />
      </div>
    </div>
  );
}

export default About;
