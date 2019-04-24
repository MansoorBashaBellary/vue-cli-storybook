import { configure, storiesOf, addDecorator, addParameters } from '@storybook/vue';
import README from './welcome.md';
import changelog from '../changelog.md';
import contribute from '../CONTRIBUTING.md';
import { addReadme } from 'storybook-readme/vue';
import { withA11y } from '@storybook/addon-a11y';

function loadStories() {
  require('../stories/index.js');
}

const storybookOptions = {
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  showSearchBox: false,
  panelPosition: 'right',
  sortStoriesByKind: false,
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\//,
  sidebarAnimations: true,
};

addDecorator(withA11y);
addDecorator(addReadme);

addParameters({
  options: storybookOptions,
  a11y: {
    rules: [
      {
        id: 'color-contrast',
        enabled: false
      }
    ]
  }
});

storiesOf('intro/Welcome', module)
  .addParameters({ options: { showPanel: false } })
  .addParameters({
    readme: {
      content: README,
      DocPreview: {
        data() {
          return {
            styles: {
              padding: '0 16px'
            }
          };
        },
        template: `<div v-bind:style="styles"><slot></slot></div>`
      }
    }
  })
  .add('About', () => ({
    components: {
      readmePage: {
        mounted() {
          this.$el.parentNode.style.display = 'none';
          this.$el.parentNode.parentNode.lastChild.style.display = 'none';
        },
        render: h => h('div')
      }
    },
    template: '<readme-page/>'
  }));

storiesOf('intro/Welcome', module)
  .addParameters({ options: { showPanel: false } })
  .addParameters({
    readme: {
      content: changelog,
      DocPreview: {
        data() {
          return {
            styles: {
              padding: '0 16px'
            }
          };
        },
        template: `<div v-bind:style="styles"><slot></slot></div>`
      }
    }
  })
  .add('Changelog', () => ({
    components: {
      changelog: {
        mounted() {
          this.$el.parentNode.style.display = 'none';
          this.$el.parentNode.parentNode.lastChild.style.display = 'none';
          this.$nextTick(() => {
            window.scrollTo(0, 0);
          });
        },
        render: h => h('div')
      }
    },
    template: '<changelog/>'
  }));

storiesOf('intro/Welcome', module)
  .addParameters({ options: { showPanel: false } })
  .addParameters({
    readme: {
      content: contribute,
      DocPreview: {
        data() {
          return {
            styles: {
              padding: '0 16px'
            }
          };
        },
        template: `<div v-bind:style="styles"><slot></slot></div>`
      }
    }
  })
  .add('Contributing', () => ({
    components: {
      contribute: {
        mounted() {
          this.$el.parentNode.style.display = 'none';
          this.$el.parentNode.parentNode.lastChild.style.display = 'none';
        },
        render: h => h('div')
      }
    },
    template: '<contribute/>'
  }));

configure(loadStories, module);