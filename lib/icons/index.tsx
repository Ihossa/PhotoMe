import { DetailedHTMLProps, HTMLAttributes, FC } from 'react';

export enum ICON_NAME {
  ARROW_DOWN = 'arrow_down',
  ABOUT_SEARCH = 'about_search',
  ABOUT_CREATIVE = 'about_creative',
  ABOUT_ORGANIZATION = 'about_organization',
  LOCATION = 'location',
  LIKE = 'like',
  ARROW_NAV = 'arrow_nav',
  VISIBLE_KEY = 'visible_key',
  NOT_VISIBLE_KEY = 'not-visible-key'
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
    case ICON_NAME.ARROW_DOWN: {
      return (
       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="6" viewBox="0 0 18 6" fill="none">
         <path d="M1 1L9 5L17 1" stroke="currentColor"/>
       </svg>
    )}
    case ICON_NAME.ABOUT_SEARCH: {
      return (
          <svg xmlns="http://www.w3.org/2000/svg" width="155" height="175" viewBox="0 0 155 175" fill="none">
            <g filter="url(#filter0_d_1231_539)">
              <path d="M96.9436 34.4589C84.7849 15.1987 59.2241 9.42152 39.9643 21.58C20.7044 33.7385 14.9268 59.2992 27.0854 78.5593C37.8558 95.6203 59.1418 102.099 77.2497 94.9055L82.3918 103.051C81.9936 105.437 82.4328 107.971 83.8226 110.173L105.959 145.239C108.963 149.997 115.278 151.424 120.037 148.42C124.795 145.416 126.222 139.101 123.218 134.343L101.082 99.277C99.6922 97.0756 97.593 95.5889 95.2677 94.9223L90.1256 86.7768C104.408 73.5231 107.714 51.5196 96.9436 34.4589ZM119.109 136.937C120.682 139.429 119.935 142.737 117.442 144.311C114.95 145.884 111.642 145.137 110.069 142.644L87.9321 107.578C86.3587 105.086 87.1063 101.778 89.5988 100.205C92.0912 98.6311 95.399 99.3787 96.9725 101.871L119.109 136.937ZM84.8792 97.8873L81.6858 92.8288C82.4882 92.3936 83.2819 91.9324 84.0647 91.4382C84.8476 90.944 85.6052 90.4259 86.3432 89.8886L89.5366 94.9471C88.664 95.2069 87.8116 95.586 87.0047 96.0954C86.1977 96.6045 85.4891 97.2108 84.8792 97.8873ZM81.4705 87.3288C64.4767 98.0568 41.9228 92.959 31.1948 75.9651C20.4668 58.9713 25.5645 36.4172 42.5583 25.6892C59.5522 14.9612 82.106 20.059 92.834 37.0528C103.562 54.0467 98.4644 76.6008 81.4705 87.3288Z" fill="currentColor"/>
              <path d="M45.4984 30.3465C31.0724 39.4535 26.745 58.599 35.852 73.0251C44.9589 87.4511 64.1044 91.7785 78.5305 82.6716C92.9566 73.5646 97.284 54.4191 88.177 39.993C79.07 25.5669 59.9245 21.2396 45.4984 30.3465ZM75.9363 78.5621C63.776 86.2388 47.6378 82.5909 39.9614 70.4308C32.2848 58.2705 35.9326 42.1324 48.0927 34.456C60.2527 26.7795 76.3911 30.4272 84.0676 42.5872C91.744 54.7473 88.0966 70.8855 75.9363 78.5621Z" fill="currentColor"/>
            </g>
            <defs>
              <filter id="filter0_d_1231_539" x="-15" y="-5" width="190" height="190" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1231_539"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1231_539" result="shape"/>
              </filter>
            </defs>
          </svg>
   )}
    case ICON_NAME.ABOUT_CREATIVE: {
      return (
          <svg xmlns="http://www.w3.org/2000/svg" width="190" height="187" viewBox="0 0 190 187" fill="none">
            <g clipPath="url(#clip0_1231_556)" filter="url(#filter0_d_1231_556)">
              <g filter="url(#filter1_d_1231_556)">
                <path d="M95 76.9574C109.215 76.9574 120.781 65.633 120.781 51.7155C120.781 37.7981 109.215 26.4736 95 26.4736C80.7852 26.4736 69.2188 37.7981 69.2188 51.7155C69.2188 65.633 80.7852 76.9574 95 76.9574ZM95 31.0631C106.63 31.0631 116.094 40.3291 116.094 51.7155C116.094 63.1019 106.63 72.368 95 72.368C83.3703 72.368 73.9062 63.1019 73.9062 51.7155C73.9062 40.3291 83.3703 31.0631 95 31.0631Z" fill="currentColor"/>
                <path d="M169.06 24.6355C168.47 24.2018 167.701 24.0687 166.995 24.2707L129.066 35.1935C123.683 22.0563 112.06 15 95 15C83.4523 15 74.4125 18.2539 68.0867 24.4106L21.6711 38.0436C20.6797 38.335 20 39.2299 20 40.2419V159.567C20 160.288 20.3445 160.965 20.9328 161.398C21.343 161.704 21.8398 161.862 22.3438 161.862C22.5594 161.862 22.7773 161.832 22.9883 161.772L71.5461 148.19L117.765 161.766L117.767 161.756C117.985 161.818 118.21 161.862 118.438 161.862C118.653 161.862 118.871 161.832 119.082 161.772L168.301 148.004C169.306 147.724 170 146.822 170 145.799V26.4736C170 25.7508 169.653 25.0692 169.06 24.6355ZM95 19.5894C122.12 19.5894 127.812 38.7113 127.812 54.7514C127.812 77.9303 101.926 107.415 95 114.889C88.0695 107.417 62.1875 77.9487 62.1875 54.7514C62.1875 25.6888 80.0305 19.5894 95 19.5894ZM73.9062 96.0425C79.0156 103.503 84.2844 109.873 88.0508 114.148C82.4375 115.337 78.5938 118.675 78.5938 122.836C78.5938 128.068 85.6461 132.015 95 132.015C104.354 132.015 111.406 128.068 111.406 122.836C111.406 118.675 107.563 115.337 101.949 114.146C105.716 109.871 110.982 103.5 116.094 96.0402V156.481L73.9062 144.089V96.0425ZM98.1711 118.306C103.306 118.531 106.719 120.741 106.719 122.836C106.719 124.706 102.153 127.425 95 127.425C87.8469 127.425 83.2812 124.706 83.2812 122.836C83.2812 120.741 86.6937 118.531 91.8289 118.306C92.6281 119.155 93.1602 119.701 93.3148 119.857C93.7555 120.305 94.3648 120.557 95 120.557C95.6352 120.557 96.2445 120.305 96.6852 119.857C96.8398 119.701 97.3719 119.155 98.1711 118.306ZM24.6875 156.524V41.9492L63.1602 30.65C59.4383 36.9237 57.5 44.9988 57.5 54.7514C57.5 65.8739 62.7453 78.0061 69.2188 88.7591V144.069L24.6875 156.524ZM165.312 144.069L120.781 156.527V88.7591C127.255 78.0061 132.5 65.8739 132.5 54.7514C132.5 49.1041 131.816 44.0534 130.55 39.5512L165.312 29.5393V144.069Z" fill="currentColor"/>
              </g>
            </g>
            <defs>
              <filter id="filter0_d_1231_556" x="0" y="0" width="190" height="186.862" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1231_556"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1231_556" result="shape"/>
              </filter>
              <filter id="filter1_d_1231_556" x="-10" y="-13" width="210" height="206.862" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="15"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1231_556"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1231_556" result="shape"/>
              </filter>
              <clipPath id="clip0_1231_556">
                <rect width="150" height="146.862" fill="white" transform="translate(20 15)"/>
              </clipPath>
            </defs>
          </svg>
    )}
    case ICON_NAME.ABOUT_ORGANIZATION: {
      return (
          <svg xmlns="http://www.w3.org/2000/svg" width="190" height="154" viewBox="0 0 190 154" fill="none">
            <g filter="url(#filter0_d_1231_575)">
              <path d="M94.9999 51.25C76.9999 51.25 62.5 65.7499 62.5 83.7499C62.5 101.75 76.9999 116.25 94.9999 116.25C113 116.25 127.5 101.75 127.5 83.7502C127.5 65.7502 113 51.25 94.9999 51.25ZM94.9999 111.25C79.75 111.25 67.4998 99.0001 67.4998 83.7499C67.4998 68.5 79.75 56.2501 94.9999 56.2501C110.25 56.2501 122.5 68.5 122.5 83.7502C122.5 99.0001 110.25 111.25 94.9999 111.25Z" fill="currentColor"/>
              <path d="M95.0001 63.75C84 63.75 75 72.75 75 83.7501C75 85.2501 75.9999 86.25 77.4999 86.25C78.9999 86.25 79.9998 85.2501 79.9998 83.7501C79.9998 75.5001 86.7498 68.7501 94.9998 68.7501C96.4998 68.7501 97.4997 67.7502 97.4997 66.2502C97.5 64.7499 96.5001 63.75 95.0001 63.75Z" fill="currentColor"/>
              <path d="M32.4999 76.2501C30.9999 76.2501 30 77.25 30 78.75C30 80.25 30.9999 81.2499 32.4999 81.2499C33.9999 81.2499 34.9998 80.25 34.9998 78.75C34.9998 77.25 33.9999 76.2501 32.4999 76.2501Z" fill="currentColor"/>
              <path d="M42.4999 76.2501C40.9999 76.2501 40 77.25 40 78.75C40 80.25 40.9999 81.2499 42.4999 81.2499C43.9999 81.2499 44.9998 80.25 44.9998 78.75C44.9998 77.25 43.9999 76.2501 42.4999 76.2501Z" fill="currentColor"/>
              <path d="M150 31.2501H140C140 29.7501 139 28.7502 137.5 28.7502C136 28.7502 135 29.7501 135 31.2501H130C130 29.7501 129 28.7502 127.5 28.7502C126 28.7502 125 29.7501 125 31.2501H67.4999V23.7501C67.4999 22.2501 66.5 21.2502 65 21.2502H44.9999C43.4999 21.2502 42.5 22.2501 42.5 23.7501V31.2501H40.0001C29 31.2501 20 40.2501 20 51.25V68.7499V108.75V120.25C20 125 23.75 128.75 28.4999 128.75H94.25C94.4999 128.75 94.7501 128.75 95 128.75C95.2499 128.75 95.2499 128.75 95.5001 128.75H161.5C166.25 128.75 170 125 170 120.25V109.25V69.25V51.25C170 40.2501 161 31.2501 150 31.2501ZM165 106.25H134C136.295 102.378 137.928 98.1759 138.906 93.7873C139.259 92.3007 139.545 90.7881 139.75 89.2501C140.1 86.2164 140.133 83.1833 139.876 80.1941C139.66 77.1455 139.151 74.1329 138.25 71.25H165V106.25H165ZM136.622 66.75C134.674 61.9993 131.935 57.5886 128.5 53.7501H135.242C136.302 59.1554 140.751 63.2116 146.362 63.6982C146.412 63.7026 146.462 63.7052 146.512 63.7093C146.644 63.7193 146.775 63.7298 146.908 63.7357C147.104 63.7448 147.302 63.7503 147.5 63.7503C147.699 63.7503 147.896 63.7451 148.092 63.7357C148.225 63.7298 148.357 63.7193 148.489 63.7093C148.539 63.7055 148.589 63.7029 148.638 63.6982C154.25 63.2116 158.698 59.1554 159.759 53.7501H165V66.75H136.622ZM155 51.25C155 55.5 151.75 58.75 147.5 58.75C143.25 58.75 140 55.5 140 51.25C140 46.9999 143.25 43.75 147.5 43.75C151.75 43.75 155 47.0001 155 51.25ZM47.5001 26.25H62.5001V31.2501H47.5001V26.25ZM40.0001 36.25H45.0002H65H150C157.5 36.25 163.5 41.7499 164.75 48.75H159.758C158.698 43.3448 154.249 39.2886 148.638 38.802C148.588 38.7976 148.538 38.795 148.488 38.7909C148.356 38.7809 148.225 38.7704 148.092 38.7645C147.896 38.7554 147.698 38.7499 147.5 38.7499C147.301 38.7499 147.104 38.7551 146.908 38.7645C146.775 38.7704 146.643 38.7809 146.511 38.7909C146.461 38.7947 146.411 38.7973 146.362 38.802C140.75 39.2886 136.301 43.3448 135.241 48.75H123.25C115.249 42.25 105.25 38.7501 94.9994 38.7501C84.7493 38.7501 74.7494 42.2502 66.7493 48.75H25.25C26.5001 41.7501 32.5001 36.25 40.0001 36.25ZM25.0001 71.25H51.7502C50.5001 75.25 50.0003 79.5 50.0003 83.7501C50.0003 91.7502 52.0004 99.5001 56.0003 106.25H25.0001V71.25ZM53.7438 66.25H25.0001V53.7499H61.7501C58.3423 57.4987 55.6596 61.713 53.7438 66.25ZM28.4999 123.75C26.4998 123.75 24.9998 122.25 24.9998 120.25V111.25H59.6706C61.3341 113.403 63.1982 115.414 65.2499 117.25C68 119.75 71.2499 122 74.4998 123.75H28.4999ZM95.2499 123.75H94.25C84.7499 123.5 75.5 120 68.2499 113.5C66.3928 111.861 64.7149 110.056 63.2261 108.117C63.1476 107.724 62.9744 107.337 62.7497 107C57.7698 100.028 55.0238 92.064 55.0019 83.6022C55.0455 71.998 60.2073 60.8971 69.0406 53.4296C69.1104 53.3781 69.1801 53.3201 69.2498 53.25C76.4999 47.0001 85.4999 43.75 94.9997 43.75C104.189 43.75 112.91 46.7913 120.032 52.6465C120.157 52.8607 120.313 53.0631 120.5 53.2498C131 61.9999 136.25 75.2497 134.5 88.7497C132.5 106.75 117.75 121.5 99.5 123.5C98 123.75 96.5 123.75 95.2499 123.75ZM161.5 123.75H115.5C121.381 120.696 126.49 116.412 130.512 111.25H165V120.25C165 122.25 163.5 123.75 161.5 123.75Z" fill="currentColor"/>
            </g>
            <defs>
              <filter id="filter0_d_1231_575" x="0" y="-15" width="190" height="190" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5"/>
                <feGaussianBlur stdDeviation="10"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1231_575"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1231_575" result="shape"/>
              </filter>
            </defs>
          </svg>
    )}

      case ICON_NAME.LOCATION: {
          return (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15 2.8125C20.0482 2.8125 24.375 7.13927 24.375 12.1875C24.375 17.2357 15 27.1875 15 27.1875C15 27.1875 5.625 17.2357 5.625 12.1875C5.625 7.13927 9.95177 2.8125 15 2.8125Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="10.3125" y="7.5" width="9.375" height="9.375" rx="4.6875" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
          )}

      case ICON_NAME.LIKE: {
          return (
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.625 4.68741C24.1675 4.66792 27.1875 6.44462 27.1875 12.1874C27.1875 17.9302 14.9999 26.2499 14.9999 26.2499C14.9999 26.2499 2.8125 17.9302 2.8125 12.1874C2.8125 6.44462 5.83239 4.69103 9.375 4.68741C11.25 4.6855 13.8298 5.86359 15.0001 7.49991C16.1702 5.86359 18.729 4.69785 20.625 4.68741Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
          )}
      case ICON_NAME.ARROW_NAV: {
          return (
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" viewBox="0 0 6 12" fill="none">
                  <path d="M5 1L1 6L5 11" stroke="currentColor"/>
              </svg>
          )
      }

      case ICON_NAME.VISIBLE_KEY: {
          return (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M24.5669 15C24.5669 15 22.1956 21 15.513 21C8.83037 21 6.56689 15 6.56689 15C6.56689 15 8.83037 9 15.513 9C22.1956 9 24.5669 15 24.5669 15ZM19.1777 15C19.1777 13.0575 17.5369 11.4828 15.513 11.4828C13.4891 11.4828 11.8483 13.0575 11.8483 15C11.8483 16.9425 13.4891 18.5172 15.513 18.5172C17.5369 18.5172 19.1777 16.9425 19.1777 15Z"
                      fill="currentColor"
                  />
                  <path
                      d="M15.513 13.3448C16.4654 13.3448 17.2376 14.0859 17.2376 15C17.2376 15.9141 16.4654 16.6552 15.513 16.6552C14.5606 16.6552 13.7885 15.9141 13.7885 15C13.7885 14.0859 14.5606 13.3448 15.513 13.3448Z"
                      fill="currentColor"
                  />
              </svg>
          );
      }

      case ICON_NAME.NOT_VISIBLE_KEY: {
          return (
              <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.5262 20.5005C8.87378 20.5005 6.56689 14.8744 6.56689 14.8744C6.56689 14.8744 7.16803 13.3461 8.66602 11.8683L12.1463 15.0719C12.1463 16.9265 13.8203 18.2147 15.8351 18.2147L17.9977 20.2147C17.2709 20.3847 16.3952 20.5005 15.5262 20.5005Z"
                      fill="currentColor"
                  />
                  <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5539 9.07408C22.2064 9.07408 24.5669 14.8025 24.5669 14.8025C24.5669 14.8025 23.626 17.0857 21.2582 18.7692L24.5669 21.8148L23.2793 23L19.6724 19.6799L17.7304 17.8923L16.2615 16.5402L14.2026 14.645L12.7337 13.2929L9.98514 10.7629L7.18478 8.18519L8.47234 7L11.5854 9.86553C12.6865 9.38655 14.0002 9.07408 15.5539 9.07408ZM19.5239 15C19.5239 13.1454 17.8906 11.642 15.8758 11.642C15.1987 11.642 14.5647 11.8118 14.0212 12.1077L15.4901 13.4598C15.6141 13.4336 15.7432 13.4198 15.8758 13.4198C16.824 13.4198 17.5926 14.1273 17.5926 15C17.5926 15.1221 17.5776 15.2409 17.5491 15.355L19.018 16.7071C19.3395 16.2069 19.5239 15.6233 19.5239 15Z"
                      fill="currentColor"
                  />
              </svg>
          );
      }

    default: {
      return null;
    }
  }
};
