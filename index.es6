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
    return Object.keys(image).map((key) => `${image[key]} ${key}`).join(',');
  }

  render() {
    const article = articleStore.get(this.props.id);
    let image = article.attributes.tileimage || {};
    if (this.props.wide) {
      image = article.attributes.tileimagewide || image;
    }
    const srcSet = this.getSrcSet(image);
    const alt = article.attributes.alt;
    return (
      <article
        className="Tile"
        id={'tile' + this.props.id}
        data-section={article.attributes.section}
        itemProp="itemListElement"
      >
        <a href={`/article/${article.id}/${article.attributes.slug}`} className="Tile--inner"
        itemProp="url">
          <div className="Tile--inner-content">
            <div className="text-part">
              <h1 className="section">{article.attributes.section}</h1>
              <h2
                className="title"
                dangerouslySetInnerHTML={{ __html: article.attributes.toc }}
                itemProp="name"
              />
              <p className="rubric" itemProp="description">{article.attributes.rubric}</p>
            </div>
          </div>
          <div className="Tile--inner-image">
            <div className="image-tint"></div>
            <div className="image-grad"></div>
            <img
              className="Tile--image"
              src={`${image['1.0x']}`}
              srcSet={srcSet}
              alt={alt}
              itemProp="image"
            />
          </div>
        </a>
      </article>
    );
  }
}
