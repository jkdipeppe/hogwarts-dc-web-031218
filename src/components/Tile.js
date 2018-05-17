import React from 'react';

function importAll(r) {
  return r.keys().map(r);
}

class Tile extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      details: false
    }
  }

  handleClick = () => {
    this.setState(
      {details: !this.state.details}
    )
  }

  render() {
    const images = importAll(require.context('../hog-imgs/', false, /\.(png|jpe?g|svg)$/));
    let currImage = images.find(image => image.includes(this.props.hog.name.toLowerCase().split(' ').join('_')))

    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const medal = 'highest medal achieved'

    return (
      <div className='four wide column'>
        <div onClick={this.handleClick} className='ui card'>
          <div className="image">
            <img src= {currImage}/>
          </div>
          <div className="content">
            <a className="header">{this.props.hog.name}</a>

            {
              this.state.details ?
              <div className="description">
                <div>
                  Weight: {this.props.hog[weight]}
                </div>
                <div>
                  Highest Medal Achieved: {this.props.hog[medal]}
                </div>
                <div>
                  Greased: {this.props.hog.greased? 'yes' : 'no'}
                </div>
              </div>
              :
              null
            }
          </div>

        </div>
      </div>
    )
  }
}

export default Tile
