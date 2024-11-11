import React from 'react'

function Scorecard(props) {

    console.log("scorecard re render")

  return (
    <div>
        Scorecard: {props.score}/0
    </div>
  )
}

export default Scorecard