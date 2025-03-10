import { useEffect, useRef } from "react";

const GameContainer = () => {
  const gameRef = useRef<any>(null); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    // Kiểm tra có window hay không
    if (typeof window !== "undefined") {
      import("phaser").then((Phaser) => {
        import("@/game/Game").then(({ GameConfig }) => {
          if (!gameRef.current) {
            gameRef.current = new Phaser.Game(GameConfig);
          }
        });
      });
    }

    return () => {
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return <div id="game-container" />;
};

export default GameContainer;
