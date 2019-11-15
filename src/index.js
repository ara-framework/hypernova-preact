/* eslint-disable import/prefer-default-export */
import hypernova, { serialize, load } from 'hypernova';
import { h, render } from 'preact';
import renderToString from 'preact-render-to-string';

export const renderPreact = (name, component) => hypernova({
  server() {
    return (props) => {
      const html = renderToString(h(component, props));
      return serialize(name, html, props);
    };
  },

  client() {
    const payloads = load(name);

    if (payloads) {
      payloads.forEach((payload) => {
        const { node, data } = payload;
        const element = h(component, data);

        render(element, node);
      });
    }

    return component;
  },
});
