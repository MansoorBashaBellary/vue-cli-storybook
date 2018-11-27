import { storiesOf } from '@storybook/vue';
import Button from './Button.vue';

storiesOf('Button', module)
  .add('with some emoji', () => ({
    components: {
      Button
    },
    template: `<Button />`
  }));