/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

// We've set up this sample using CSS modules, which lets you import class
// names into JavaScript: https://github.com/css-modules/css-modules
// You can configure or change this in the webpack.config.js file.
import * as style from './style.css';

// This function is called to render your contents.
export function render(container: HTMLElement, mimeType: string, data: any) {
  // Format the JSON and insert it as <pre><code>{ ... }</code></pre>
  const pre = document.createElement('pre');
  pre.classList.add(style.json);
  const code = document.createElement('code');
  code.textContent = `mime type: ${mimeType}\n\n${JSON.stringify(data, null, 2)}`;
  pre.appendChild(code);
  container.appendChild(pre);
}

module.hot?.addDisposeHandler(() => {
  // In development, this will be called before the renderer is reloaded. You
  // can use this to clean up or stash any state.
});
