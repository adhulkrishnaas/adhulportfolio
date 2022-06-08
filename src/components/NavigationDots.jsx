import React, { useState } from "react";

const NavigationDots = ({ active }) => {
  const [setToggle, setsetToggle] = useState(true);
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === true ? { backgroundColor: "#313BAC" } : {}}
            onClick={() => setToggle(false)}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
