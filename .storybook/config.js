import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import theme from './theme';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

setOptions({
  name: '<img src="https://chewy.com/assets/img/logo/chewy-logo-blue.svg" />',
  theme: theme
});

configure(loadStories, module);