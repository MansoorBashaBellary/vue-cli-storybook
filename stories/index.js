import { storiesOf } from '@storybook/vue';
import Button from './Button.vue';

storiesOf('Button', module)
  .add('with some emoji', () => ({
    components: {
      Button
    },
    template: `<Button />`
  }));

storiesOf('Button', module)
  .add('with some emoji1111', () => ({
    components: {
      Button
    },
    template: `<Button />`
  }));