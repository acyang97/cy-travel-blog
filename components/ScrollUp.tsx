"use client";

import { useEffect } from "react";

// Copied from: https://github.com/vercel/next.js/issues/42492
const ScrollUp = () => {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return null;
};

export default ScrollUp;
