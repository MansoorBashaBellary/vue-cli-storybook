import { themes } from '@storybook/components';

const overrideTheme = {
  storiesNav: {
    background: '#128CED'
  },
  brandLink: {
    background: 'white',
    border: 'none'
  }
};

export default Object.assign({}, themes.normal, overrideTheme);