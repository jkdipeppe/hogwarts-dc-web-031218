import Tile from './Tile';
import React from 'react';

let counter = 0;

const TilesContainer = (props) => {
  let sortedHogs = [...props.hogList]
  const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

  if(props.greased === 'greased') {
    sortedHogs = sortedHogs.filter(hog => hog.greased)
  } else if(props.greased === 'not') {
    sortedHogs = sortedHogs.filter(hog => !hog.greased)
  }

  if (props.type === 'weight') {
    sortedHogs.sort(
      function(hog1,hog2) {
        return hog2[weight] - hog1[weight]
      }
    )
  } else if(props.type === 'name') {
    sortedHogs.sort(
      function(hog1,hog2) {
        return hog1.name.localeCompare(hog2.name)
      }
    )
  }


  return (
    <div className="ui grid">
      {sortedHogs.map(hog => <Tile hog={hog} key={++counter} />)}
    </div>
  )
}

export default TilesContainer
