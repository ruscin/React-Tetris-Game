import React, { useState } from "react";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";
import { crateStage, createStage } from "../gameHelpers";

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log("re-render");

    const movePlayer = dir =>{
        updatePlayerPos({x: dir, y: 0});
    }

    const startGame = () =>{
        setStage(createStage());
        resetPlayer();
    }

    const drop = () => {
        updatePlayerPos({x: 0, y: 1, collided: false})
    }
    const dropPlayer = () => {
        drop();
    }

    const move = ({keyCode}) => {
        if (!gameOver){
            if(keyCode === 37){
                movePlayer(-1);
            }
            else if(keyCode === 39){
                movePlayer(1);
            }
            else if(keyCode === 40){
                dropPlayer();
            }
        }
    }

    return (
        <div>
            <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
                <StyledTetris>
                    <Stage stage={stage} />
                    <aside>
                        {gameOver ? (
                            <Display gameOver={gameOver} text="Game Over" />
                        ) :
                            (
                                <div>
                                    <Display text="Score" />
                                    <Display text="Rows" />
                                    <Display text="Level" />
                                </div>
                            )
                        }

                        <StartButton callback={startGame} />
                    </aside>
                </StyledTetris>
            </StyledTetrisWrapper>
        </div>
    )

}

export default Tetris;