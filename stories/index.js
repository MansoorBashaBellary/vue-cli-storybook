import { storiesOf } from '@storybook/vue';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Button1 from './Button.vue';

storiesOf('Button1', module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add('with some emoji', () => ({
    components: {
      Button1
    },
    data() {
      return {
        title: text('heading', 'Heading')
      }
    },
    template: `<Button1 :title="title" />`
  }));