import { useEffect, useRef } from "react";

const GameContainer = () => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    let gameInstance: Phaser.Game | null = null;

    if (typeof window !== "undefined") {
      import("phaser").then(({ default: Phaser }) => {
        import("@/game/Game").then(({ GameConfig }) => {
          if (!gameRef.current) {
            gameInstance = new Phaser.Game(GameConfig);
            gameRef.current = gameInstance;
          }
        });
      });
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div id="game-container" />;
};

export default GameContainer;
