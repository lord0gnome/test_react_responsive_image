import React from 'react';
import ReactDOM from 'react-dom';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import preloadNoBite from './preload_merguez_potato_nobite.jpg'
import preloadBite from './preload_merguez_potato_nobite.jpg'
import compressedNoBite from './preload_merguez_potato_nobite.jpg'
import compressedBite from './preload_merguez_potato_nobite.jpg'

ReactDOM.render((
<ResponsiveImage>
  <ResponsiveImageSize
    default
    minWidth={0}
    path={preloadNoBite}
  />
  <ResponsiveImageSize
    minWidth={300}
    path={preloadBite}
  />
  <ResponsiveImageSize
    minWidth={500}
    path={compressedBite}
  />
    <ResponsiveImageSize
    minWidth={800}
    path={compressedNoBite}
  />
</ResponsiveImage>
), document.getElementById('root'));
