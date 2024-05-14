"use client"

import Typewriter from 'typewriter-effect';

export default function Text({ texts }) {
  return <Typewriter
    options={{
      strings: texts,
      autoStart: true,
      loop: true,
    }}
  />
}