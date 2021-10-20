import { PLUGIN_NAME, PREFIX_KEY, MENU_TAB } from '../utils/constants';

const decorateMenu = (menu) => {
  for (const menuItem of menu) {
    if (menuItem.label === MENU_TAB) {
      menuItem.submenu = menuItem.submenu.concat({
        label: PLUGIN_NAME,
        submenu: [
          {
            label: 'Next Wallpaper',
            accelerator: `${PREFIX_KEY}+U`,
            click(item, focusedWindow) {
              focusedWindow?.rpc.emit(`${PLUGIN_NAME}:next`);
            },
          },
          {
            label: 'Previous Wallpaper',
            accelerator: `${PREFIX_KEY}+I`,
            click(item, focusedWindow) {
              focusedWindow?.rpc.emit(`${PLUGIN_NAME}:previous`);
            },
          },
        ],
      });
      break;
    }
  }
  return menu;
};

export default decorateMenu;
