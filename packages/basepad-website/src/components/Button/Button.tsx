import 'tailwindcss/tailwind.css';
import React from 'react';

type Props = {
  text: string;
};

function Button({ text }: Props) {
  return (
    <button type="submit" className="btn btn-primary">
      {text}
    </button>
  );
}

export default Button;
