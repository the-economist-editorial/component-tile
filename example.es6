import React from 'react';
import Tile from './index.es6';
import WorldIfContent from '@economist/world-if-assets';

for (const article of WorldIfContent.data[0].relationships.posts.data) {
  Tile.store.add(article);
}
export default (
  <Tile id="1" />
);
