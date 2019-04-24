import { themes } from '@storybook/components';

const overrideTheme = {
  storiesNav: {
    background: '#128CED',
    paddingRight: '10px'
  },
  brandLink: {
    background: 'white',
    border: 'none'
  },
  treeArrow: {
    base: {
      display: 'none'
    }
  }
};

export default Object.assign({}, themes.normal, overrideTheme);