import { DetailedHTMLProps, HTMLAttributes, FC } from 'react';

export enum ICON_NAME {
  LOGO = 'logo',
}

interface IIconsProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  name: ICON_NAME;
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
  strokeWidth?: string;
  stokeWidth?: string;
  styles?: any;
  border?: any;
  markShadow?: any;
  strokeColor?: any;
  markColor?: any;
  bgColor?: any;
}

export const Icons: FC<IIconsProps> = props => {
  return (
    <span style={{ ...props.style }} className={ props.className || ''} onClick={props.onClick}>
      <IconsLibrary {...props} />
    </span>
  );
};

interface IIconsLibraryProps {
  name: ICON_NAME;
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
  strokeWidth?: string;
  stokeWidth?: string;
  styles?: any;
  border?: any;
  markShadow?: any;
  strokeColor?: any;
  markColor?: any;
  bgColor?: any;
}

const IconsLibrary: FC<IIconsLibraryProps> = props => {
  switch (props.name) {
    case ICON_NAME.LOGO: {
      // @ts-ignore
      return (
          <svg fill={'currentColor'} xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 63 63" xmlSpace="preserve">
            <g>
                <g id="group-17svg">
                  <path id="path-1_7_" d="M56.728,56.508H5.456C2.157,56.508,0,54.041,0,50.893V22.52c0-3.266,2.268-6.025,5.456-6.025h15.155    l1.145-5.444c0.675-2.707,3.063-4.559,5.82-4.559h7.577c2.757,0,5.146,1.852,5.808,4.505l1.156,5.498h14.611    c3.168,0,6.272,2.759,6.272,6.025v28.373C63,54.094,60.061,56.508,56.728,56.508z M5.456,19.496C3.92,19.496,3,20.909,3,22.52    v28.373c0,1.515,0.785,2.614,2.456,2.614h51.272c1.649,0,3.272-1.099,3.272-2.614V22.52c0-1.611-1.756-3.024-3.272-3.024H40.899    c-0.71,0-1.322-0.497-1.467-1.191l-1.394-6.636c-0.315-1.258-1.507-2.176-2.885-2.176h-7.577c-1.378,0-2.569,0.918-2.897,2.23    l-1.382,6.582c-0.146,0.694-0.758,1.191-1.468,1.191H5.456z"/>
                  <path id="path-2_7_" d="M30.762,45.981c-5.511,0-9.994-4.485-9.994-9.996c0-5.513,4.483-9.997,9.994-9.997    c5.509,0,9.993,4.484,9.993,9.997C40.755,41.496,36.271,45.981,30.762,45.981z M30.762,28.989c-3.857,0-6.994,3.138-6.994,6.996    c0,3.857,3.137,6.995,6.994,6.995c3.856,0,6.993-3.138,6.993-6.995C37.755,32.127,34.618,28.989,30.762,28.989z"/>
                  <path id="path-3_7_" d="M30.762,51.34c-8.465,0-15.352-6.889-15.352-15.355c0-8.468,6.887-15.356,15.352-15.356    c8.464,0,15.35,6.888,15.35,15.356C46.112,44.451,39.226,51.34,30.762,51.34z M30.762,23.629c-6.811,0-12.352,5.543-12.352,12.356    c0,6.812,5.541,12.354,12.352,12.354c6.81,0,12.35-5.542,12.35-12.354C43.112,29.172,37.572,23.629,30.762,23.629z"/>
                  <path id="path-4_7_" d="M17.573,13.494h-8c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5h8c0.828,0,1.5,0.672,1.5,1.5    S18.401,13.494,17.573,13.494z"/>
                  <path id="path-5_7_" d="M49.433,11.494h0.622c2.379,0,3.945,1.881,3.945,4.261v1.741h-8v-1.741    C46,13.375,47.054,11.494,49.433,11.494z"/>
                </g>
            </g>
          </svg>
      )
    }
    default: {
      return null;
    }
  }
};
