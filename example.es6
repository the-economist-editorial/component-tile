import React from 'react';
import Tile from './index.es6';
import WorldIfContent from '@economist/world-if-assets';

Tile.store.setContent(WorldIfContent);

export default (
  <Tile id="1" />
);
