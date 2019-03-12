import { storiesOf } from '@storybook/vue';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Button from './Button.vue';

storiesOf('Button', module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add('with some emoji', () => ({
    components: {
      Button
    },
    data() {
      return {
        title: text('heading', 'Heading')
      }
    },
    template: `<Button :title="title" />`
  }));