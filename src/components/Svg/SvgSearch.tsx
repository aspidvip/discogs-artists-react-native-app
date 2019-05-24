import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { ISvgProps } from '../../types';

const SvgSearch: React.FC<ISvgProps> = props => (
  <Svg viewBox="0 0 26 28" {...props}>
    <Path d="M18 13c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zm8 13c0 1.094-.906 2-2 2a1.96 1.96 0 0 1-1.406-.594l-5.359-5.344a10.971 10.971 0 0 1-6.234 1.937c-6.078 0-11-4.922-11-11s4.922-11 11-11 11 4.922 11 11c0 2.219-.672 4.406-1.937 6.234l5.359 5.359c.359.359.578.875.578 1.406z" />
  </Svg>
);

export default SvgSearch;