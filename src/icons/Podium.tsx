import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const Podium = (props: SvgProps) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Path
        d="M32 160v296a8 8 0 0 0 8 8h136V160a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16zM320 48H192a16 16 0 0 0-16 16v400h160V64a16 16 0 0 0-16-16zm144 160H352a16 16 0 0 0-16 16v240h136a8 8 0 0 0 8-8V224a16 16 0 0 0-16-16z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </Svg>
  );
};

export default Podium;
