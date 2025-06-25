import React, { useState } from 'react';

function hexToRgb(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  }
  return { r, g, b };
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)); break;
      case g: h = ((b - r) / d + 2); break;
      case b: h = ((r - g) / d + 4); break;
    }
    h *= 60;
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

function ColorPicker() {
  const [color, setColor] = useState("#534666");

  const { r, g, b } = hexToRgb(color);
  const { h, s, l } = rgbToHsl(r, g, b);

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
    alert(`Copied: ${value}`);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className='color-picker-container'>
      <h1>Color Picker</h1>
      <div className='color-display' style={{ backgroundColor: color }}>
        <p onClick={() => copyToClipboard(color)} className="copyable">HEX: {color}</p>
        <p onClick={() => copyToClipboard(`rgb(${r}, ${g}, ${b})`)} className="copyable">
          RGB: rgb({r}, {g}, {b})
        </p>
        <p onClick={() => copyToClipboard(`hsl(${h}, ${s}%, ${l}%)`)} className="copyable">
          HSL: hsl({h}, {s}%, {l}%)
        </p>
      </div>
      <label>Select a Color:</label>
      <input type='color' value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
