export const SITE_URL = 'https://izzzyswap.xyz';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'izzzy_xyz';
export const BRAND_NAME = 'izzzy swap';
export const SITE_NAME_MULTILINE = ['IZZZY', 'Inc'];
export const SITE_NAME = 'IZZZY Inc';
export const META_NAME = 'ICO';
export const META_DESCRIPTION =
  'Ethereum NFT project. Made through the collaboration of creators, designers, and developers by the crypto community!';
export const SITE_DESCRIPTION =
  'An interactive blockchain online experience by the community.';
export const DATE = '15 December 2022';
export const SHORT_DATE = 'Dec 15 - 9:00am PST';
export const FULL_DATE = 'Dec 15th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = 'https://izzzy.xyz/legal';
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const SMART_CONTRACT =
  'https://polygonscan.com/token/0x612e62488A2d36018ec7539a6a8BcfFC412B5eD6';
export const REPO = 'https://twitter.com/izzzy_xyz';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [
  {
    name: 'Discord',
    route: '/'
  },
  {
    name: 'Info',
    route: '/'
  },
  {
    name: 'Roadmap',
    route: '/'
  },
];

export type TicketGenerationState = 'default' | 'loading';
