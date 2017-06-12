import React from 'react'


export default class ThemedDecorations extends React.Component {

  constructor() {
    super()


  }

  render() {
    return (
      <div>
        {this.props.children.map(child => <div className={this.props.theme}>{child}</div>)

        }
      </div>
    )
  }


}
