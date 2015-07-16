import React from 'react';
import ArticleStore from '@economist/component-articlestore';

const articleStore = new ArticleStore('/content');
export default class Tile extends React.Component {

  static get propTypes() {
    return {
      id: React.PropTypes.string,
    };
  }

  render() {
    const article = articleStore.get(this.props.id);
    if (!article) {
      if (this.state && this.state.requested) {
        throw new Error('Already requested article id, but failed');
      }
      this.state = this.state || {};
      this.state.requesting = true;
      articleStore.fetch(this.props.id).then(() => this.setState({ requesting: false, requested: true }));
      return (
        <div className="Tile--loading">
          Loading
        </div>
      );
    }
    return (
      <article className="article-reveal-tile" ref="animatedTile">
        <a href={`/article/${article.id}`} className="article-reveal-tile-link">
          <div className="tile-content">
            <div className="text-part">
              <h1 className="section">{article.attributes.section}</h1>
              <h2 className="title">{article.attributes.title}</h2>
              <p className="rubric">{article.attributes.rubric}</p>
            </div>
          </div>
          <div className="image-part">
            <div className="image-tint"></div>
            <div className="image-grad"></div>
            <img className="image"
              srcSet={`${article.attributes.imglrg} 1220w,
                       ${article.attributes.imgmed} 1024w,
                       ${article.attributes.imgsml} 568w`}
            alt={article.attributes.imgalt} />
          </div>
        </a>
      </article>
    );
  }
}
