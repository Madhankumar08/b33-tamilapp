import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  //let color="skyblue";
  const [color, setColor] = useState("orange");

  const [colorList, setColorList] = useState(["orange", "crimson", "red", "plum"]);

  const styles = {
    fontSize: "24px",
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles} type="text"
          placeholder="enter the color"
          value={color} />
        <button
          onClick={() => setColorList([...colorList, color])}
        >Add color</button>
      </div>

      {colorList.map(clr => (
        <ColorBox color={clr} />

      ))}
    </div>
  );
}
