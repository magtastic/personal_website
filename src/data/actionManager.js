import {
  VALID_COMMANDS,
  ANSWERS_FOR_COMMANDS,
  HELP_FOR_COMMANDS,
  ANSWER_FOR_INVALID_COMMAND,
  ANSWER_FOR_UNKNOWN_COMMAND,
  VALID_SOCIAL_MEDIAS,
  SOCIAL_MEDIAS_TO_URLS,
} from './constants';

export default class ActionManager {
  constructor(addToHistory, clear, openURL) {
    this.addToHistory = addToHistory;
    this.clear = clear;
    this.openURL = openURL;
  }

  handleInput(args) {
    if (VALID_COMMANDS.includes(args[0])) {
      if (args.includes('--help')) {
        const answers = HELP_FOR_COMMANDS[args[0]];
        this.addToHistory(args.join(' '), answers, true);
      } else {
        switch (args[0]) {
          case 'clear': {
            this.clear();
            break;
          }
          case 'open': {
            if (args.length === 2 && VALID_SOCIAL_MEDIAS.includes(args[1])) {
              const answers = ANSWERS_FOR_COMMANDS[args.join(' ')];
              const url = SOCIAL_MEDIAS_TO_URLS[args[1]];
              this.addToHistory(args.join(' '), answers, true);
              this.openURL(url);
            } else {
              this.addToHistory(args.join(' '), ANSWER_FOR_INVALID_COMMAND(args[0]), false);
            }
            break;
          }
          default: {
            if (args.length === 1) {
              const answers = ANSWERS_FOR_COMMANDS[args[0]];
              this.addToHistory(args.join(' '), answers, true);
            } else {
              this.addToHistory(args.join(' '), ANSWER_FOR_INVALID_COMMAND[args.join(' ')], false);
            }
          }
        }
      }
    } else {
      this.addToHistory(args.join(' '), ANSWER_FOR_UNKNOWN_COMMAND(args), false);
    }
  }
}
