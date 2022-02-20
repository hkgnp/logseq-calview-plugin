import '@logseq/libs';
import { handleClosePopup } from './handleClosePopup';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

const main = async () => {
  console.log('logseq-calview-plugin loaded.');

  window.setTimeout(async () => {
    const userConfigs = await logseq.App.getUserConfigs();

    const preferredDateFormat: string = userConfigs.preferredDateFormat;

    logseq.updateSettings({
      preferredDateFormat: preferredDateFormat,
    });

    console.log(`Settings updated to ${preferredDateFormat}`);
  }, 3000);

  if (!logseq.settings.startEndHour) {
    logseq.updateSettings({
      startEndHour: {
        startDayHour: 8,
        endDayHour: 20,
      },
    });
  }

  logseq.provideModel({
    show() {
      logseq.showMainUI();
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('app')
      );
    },
  });

  handleClosePopup();

  // Register UI
  logseq.App.registerUIItem('toolbar', {
    key: 'logseq-calview-plugin',
    template: `
            <a data-on-click="show" class="button">
              <i class="ti ti-calendar-time"></i>
            </a>
      `,
  });
};

logseq.ready(main).catch(console.error);