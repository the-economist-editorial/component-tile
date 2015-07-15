import React from 'react';

export default class Tile extends React.Component {

  static get propTypes() {
    return {
      data: React.PropTypes.object,
      id: React.PropTypes.string,
      url: React.PropTypes.string,
      section: React.PropTypes.string,
      title: React.PropTypes.string,
      rubric: React.PropTypes.string,
      imglrg: React.PropTypes.string,
      imgmed: React.PropTypes.string,
      imgsml: React.PropTypes.string,
      imgalt: React.PropTypes.string,
    };
  }

  render() {
    return (
      <article className="article-reveal-tile" data-id={this.props.data.id}
      id={'tile' + this.props.data.id} ref={`animatedTile` + tile.id} test="test">
        <a href={this.props.data.url} className="article-reveal-tile-link">
          <div className="tile-content">
            <div className="text-part">
              <h1 className="section">{this.props.data.section}</h1>
              <h2 className="title" dangerouslySetInnerHTML={{ __html: this.props.data.title }}/>
              <p className="rubric">{this.props.data.rubric}</p>
            </div>
          </div>
          <div className="image-part">
            <div className="image-tint"></div>
            <div className="image-grad"></div>
            <img className="image"
            srcSet={this.props.data.imglrg + ` 1220w ,` + this.props.data.imgmed + ` 1024w ,` +
this.props.data.imgsml + ` 568w`}
            alt={this.props.data.imgalt} />
          </div>
        </a>
      </article>
    );
  }
}
