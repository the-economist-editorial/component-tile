import React from 'react';

export default class Tile extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.object,
      id: React.PropTypes.string,
      url: React.PropTypes.string,
      section: React.PropTypes.string,
      title: React.PropTypes.string,
      rubric: React.PropTypes.rubric,
      img: React.PropTypes.img,
    };
  }

  render() {
    return (
      <div className={'article-reveal-tile ${this.props.data.animate}'} data-id={this.props.data.id}
      id={'tile' + this.props.data.id}>
        <a href={this.props.data.url} className="article-reveal-tile-link">
          <div className="tile-content">
            <div className="text-part">
              <h2 className="section">{this.props.data.section}</h2>
              <h2 className="title" dangerouslyInsertInnerHTML={{ __html: this.props.data.title }}/>
              <h2 className="rubrik">{this.props.data.rubric}</h2>
            </div>
          </div>
          <div className="image-part">
            <div className="image-tint"></div>
            <div className="image-grad"></div>
            <img className="image" src={this.props.data.img} />
          </div>
        </a>
      </div>
    );
  }
}
