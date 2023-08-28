import React from 'react'
import './ScoreBoard.css'

export const ScoreBoard = ({scores, xPlaying}) => {
    const {xScore, oScore} =scores;
  return (
    <>
      <div>
      <div className='header'> 
      <h1>Tic-Tac-Toe</h1>
      <h3>Score -Board</h3></div>
    <div className='scoreboard'>
  
    <span className={`score x-score ${!xPlaying && "inactive"}`}>X-{xScore}</span>
    <span className={`score o-score ${xPlaying && "inactive"}`}>O-{oScore}</span>
    </div>
    </div>
    </>
  )
}
