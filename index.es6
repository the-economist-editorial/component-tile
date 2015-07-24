import React from 'react';
import ArticleStore from '@economist/component-articlestore';

const articleStore = new ArticleStore('/content');
export default class Tile extends React.Component {

  static get propTypes() {
    return {
      id: React.PropTypes.string,
      wide: React.PropTypes.number,
    };
  }

  static get store() {
    return articleStore;
  }

  getSrcSet(image) {
    return Object.keys(image).map((key) => `/${image[key]} ${key}`).join(',');
  }

  render() {
    const article = articleStore.get(this.props.id);
    let image = article.attributes.tileimage || {};
    if (this.props.wide) {
      image = article.attributes.tileimagewide || image;
    }
    return (
      <article
        className="article-reveal-tile"
        id={'tile' + this.props.id}
      >
        <a href={`/article/${this.props.id}`} className="article-reveal-tile-link">
          <div className="tile-content">
            <div className="text-part">
              <h1 className="section">{article.attributes.section}</h1>
              <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: article.attributes.title }}
              />
              <p className="rubric">{article.attributes.rubric}</p>
            </div>
          </div>
          <div className="image-part">
            <div className="image-tint"></div>
            <div className="image-grad"></div>
            <img
              className="Tile--image"
              src={`/${image['1x']}`}
              srcSet={this.getSrcSet(image)}
            />
          </div>
        </a>
      </article>
    );
  }
}
