export const VALID_COMMANDS = [
  '--help',
  'about',
  'work',
  'education',
  'social',
  'clear',
];

export const COMMAND_LINE_PREFIX = '➜ ';

export const CURRENT_FOLDER_NAME = 'Magtastic';

export const ANSWERS_FOR_COMMANDS = {
  '--help': ['Check your self before you rec yo self'],
  about: ['My name is Magnús and I am a developer'],
  work: ['I am currently working for a company named GameSmash'],
  education: ['I graduated from the University of Iceland with a Bs.c. in Software Engineering'],
  social: ['Find me on all major social media under the tag: Magtastic'],
};

export const ANSWER_FOR_INVALID_COMMAND = command => ([`command not found: ${command}`]);

export const WELCOME_MESSAGE = `Welcome to the site! 
Type '--help' to get started.`;
