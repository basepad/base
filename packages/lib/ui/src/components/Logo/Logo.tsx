import React from 'react';
import tw from 'twin.macro';

const Container = tw.div`w-8 saturate-0`;

export function Logo() {
  return (
    <Container>
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 114 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="72.4437"
          height="72.4437"
          rx="4"
          transform="matrix(0.780862 -0.624704 0.780862 0.624704 0 45.2559)"
          fill="#19D893"
        />
        <rect
          width="72.4437"
          height="72.4437"
          rx="4"
          transform="matrix(0.780862 -0.624704 0.780862 0.624704 0 63.2561)"
          fill="#19D893"
          fillOpacity="0.4"
        />
      </svg>
    </Container>
  );
}

export default Logo;
