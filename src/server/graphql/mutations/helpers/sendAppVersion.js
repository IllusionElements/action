import publish from 'server/utils/publish';
import {ADDED, NOTIFICATION, VERSION_INFO} from 'universal/utils/constants';
import sleep from 'universal/utils/sleep';
import packageJSON from '../../../../../package.json';

const APP_VERSION = packageJSON.version;

const sendAppVersion = async (userId) => {
  // Sleep to give the client time to subscribe to notifications. They're loading enough stuff, this isn't critical.
  await sleep(5000);

  // Emit current app version to notify client of possible change
  const notification = {
    type: VERSION_INFO,
    version: APP_VERSION
  };
  publish(NOTIFICATION, userId, ADDED, {notification});
};

export default sendAppVersion;
