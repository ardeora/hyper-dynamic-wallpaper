// import { exec } from "child_process"
// import { hyperMiddleware } from '../types/hyper'
import myDecorateHyper from './core/container'

function mapHyperState(state, map) {
  console.log(state, map)
  return Object.assign({}, map, {
    fontFamily: state.ui.uiFontFamily
  })
}
// const myMiddleware: hyperMiddleware = ({ getState, dispatch }) => next => async (action) => {
//   switch (action.type) {
//     case 'SESSION_SET_ACTIVE':
//     case 'SESSION_ADD':
//       console.log(action.type, action.uid)
//     default:
//       break;
//   }
//   next(action);
// }
// exports.middleware = myMiddleware
exports.decorateHyper = myDecorateHyper
exports.mapHyperState = mapHyperState


exports.decorateConfig = (config) => {
  console.log('CONFIGGGGG', config)
  return Object.assign({}, config, {
    backgroundColor: '#00000000',
    padding: "18px 14px 30px",
    css: `
      ${config.css || ''}
      .hyper_main {
        
        background: url('https://i.pinimg.com/originals/44/eb/c3/44ebc3095a5deba2973f0e5fd3fb92b5.gif');
        background-size: cover;
        background-repeat: no-repeat;
        
        /*
        background: linear-gradient(324deg, #19d2cb, #b81eff);
        background-size: 400% 400%;

        animation: AnimationName 12s ease infinite;
        */
      }

      @keyframes AnimationName {
          0%{background-position:0% 7%}
          50%{background-position:100% 94%}
          100%{background-position:0% 7%}
      }
    `
  });
}