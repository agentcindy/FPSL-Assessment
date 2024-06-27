// Question 4:
// Customize the Tailwind configuration to include a new color scheme and font,
// then use these custom styles in a component.

//tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

//added to the config filetheme for custom colors and font family
module.exports = {
  theme: {
    colors: {
      'custom-red': '#FF0000',
      'custom-blue': '#0000FF',
      'custom-green': '#00FF00'
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'], // have to add a link to the font or download it and store it locally to have access to it
    }
  },
  plugins: [],
}

// React Component:

import React from 'react';

function CustomButton({ children }) {
  return (
    // add the classname directly on the element
    <button className="text-custom-blue font-serif">
      {children}
    </button>
  );
}

export default CustomButton;