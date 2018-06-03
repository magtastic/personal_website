export const COMMAND_LINE_PREFIX = '➜ ';

export const CURRENT_FOLDER_NAME = 'Magtastic';

export const WELCOME_MESSAGES = [
  'Welcome to...',
  '',
  '.##.....##....###.....######...########.########.########..##.....##',
  '.###...###...##.##...##....##.....##....##.......##.....##.###...###',
  '.####.####..##...##..##...........##....##.......##.....##.####.####',
  '.##.###.##.##.....##.##...####....##....######...########..##.###.##',
  '.##.....##.#########.##....##.....##....##.......##...##...##.....##',
  '.##.....##.##.....##.##....##.....##....##.......##....##..##.....##',
  '.##.....##.##.....##..######......##....########.##.....##.##.....##',
  '',
  'type \'--help\' after any command...',
];

export const INITIAL_INPUT = 'list-commands';

export const VALID_COMMANDS = [
  'list-commands',
  'about',
  'work',
  'education',
  'social',
  'clear',
  'open',
];

export const VALID_SOCIAL_MEDIAS = [
  'facebook',
  'twitter',
  'github',
];

export const ANSWERS_FOR_COMMANDS = {
  'list-commands': VALID_COMMANDS,
  'open facebook': ['opening facebook...'],
  'open twitter': ['opening twitter...'],
  'open github': ['opening github...'],
  about: ['My name is Magnús and I am a developer'],
  work: ['I am currently working for a company named GameSmash'],
  education: ['I graduated from the University of Iceland with a Bs.c. in Software Engineering'],
  social: ['Find me on all major social media under the tag: Magtastic'],
};

export const HELP_FOR_COMMANDS = {
  'list-commands': ['Usage: list-commands', '', 'Description:', 'lists all valid commands in MagTerm'],
  about: ['Usage: about', '', 'Description:', 'Displays a short description of Magnús'],
  work: ['Usage: work', '', 'Description:', 'Displays a list of some of the work done by Magnús'],
  education: ['Usage: education', '', 'Description:', 'Displays summary of the education Magnús has under his belt'],
  social: ['Usage: social', '', 'Description:', 'Displays something social about Magnús'],
  clear: ['Usage: clear', '', 'Description:', 'Clears your MagTerm histroy'],
  open: ['Usage: open <site>', '', 'Where <site> is one of the following', ...VALID_SOCIAL_MEDIAS, '', 'Description:', 'Opens <site> in another tab'],
};

export const ANSWER_FOR_UNKNOWN_COMMAND = command => ([`command not found: ${command}`]);
export const ANSWER_FOR_INVALID_COMMAND = command => ([`not correct usage of: '${command}', checkout '${command} --help'`]);
