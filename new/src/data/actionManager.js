import {
  VALID_COMMANDS,
  ANSWERS_FOR_COMMANDS,
  HELP_FOR_COMMANDS,
  ANSWER_FOR_INVALID_COMMAND,
  ANSWER_FOR_UNKNOWN_COMMAND,
  VALID_SOCIAL_MEDIAS,
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
        this.addToHistory(args.join(' '), answers);
      } else {
        switch (args[0]) {
          case 'clear': {
            this.clear();
            break;
          }
          case 'open': {
            if (args.length === 2 && VALID_SOCIAL_MEDIAS.includes(args[1])) {
              switch (args[1]) {
                case 'facebook': {
                  const answers = ANSWERS_FOR_COMMANDS[args.join(' ')];
                  this.addToHistory(args.join(' '), answers);
                  this.openURL('https://www.facebook.com/magnus.n.olafsson?ref=bookmarks');
                  break;
                }
                case 'twitter': {
                  const answers = ANSWERS_FOR_COMMANDS[args.join(' ')];
                  this.addToHistory(args.join(' '), answers);
                  this.openURL('https://twitter.com/MLafsson');
                  break;
                }
                case 'github': {
                  const answers = ANSWERS_FOR_COMMANDS[args.join(' ')];
                  this.addToHistory(args.join(' '), answers);
                  this.openURL('https://github.com/magtastic');
                  break;
                }
                default: {
                  this.addToHistory(args.join(' '), ANSWER_FOR_INVALID_COMMAND(args[0]));
                  break;
                }
              }
            } else {
              this.addToHistory(args.join(' '), ANSWER_FOR_INVALID_COMMAND(args[0]));
            }
            break;
          }
          default: {
            if (args.length === 1) {
              const answers = ANSWERS_FOR_COMMANDS[args[0]];
              this.addToHistory(args.join(' '), answers);
            } else {
              this.addToHistory(args.join(' '), ANSWER_FOR_INVALID_COMMAND[args.join(' ')]);
            }
          }
        }
      }
    } else {
      this.addToHistory(args.join(' '), ANSWER_FOR_UNKNOWN_COMMAND(args));
    }
  }
}
