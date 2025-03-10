"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Load PhaserGame component trên client
const PhaserGame = dynamic(() => import("@/game/GameContainer"), {
  ssr: false, // Tắt server-side rendering
});

export default PhaserGame;
