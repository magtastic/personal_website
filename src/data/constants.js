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
  'type \'--help\' after any command to get a usage description.',
];

export const INITIAL_INPUT = 'list-commands';

export const VALID_COMMANDS = [
  'list-commands',
  'about',
  'work',
  'education',
  'contact',
  'other',
  'programming',
  'clear',
  'open',
];

export const VALID_SOCIAL_MEDIAS = [
  'facebook',
  'twitter',
  'github',
  'source-code',
  'instagram',
  'twitch',
];

export const SOCIAL_MEDIAS_TO_URLS = {
  facebook: 'https://www.facebook.com/magnus.n.olafsson?ref=bookmarks',
  twitter: 'https://twitter.com/MLafsson',
  github: 'https://github.com/magtastic',
  instagram: 'https://www.instagram.com/magtastic_fingerplastic',
  twitch: 'https://www.twitch.tv/magtastic_fingerplastic/',
  'source-code': 'https://github.com/magtastic/cv',
};

// TODO: fix answers
export const ANSWERS_FOR_COMMANDS = {
  'list-commands': VALID_COMMANDS,
  'open facebook': ['opening facebook...'],
  'open twitter': ['opening twitter...'],
  'open github': ['opening github...'],
  'open instagram': ['opening instagram...'],
  'open source-code': ['opening source-code...'],
  'open twitch': ['opening twitch...'],
  about: [
    'My name is Magnús and I am a software developer.',
    'I live in Valencia, with my girlfriend, and our cat and dog.',
  ],
  work: [
    'I did some video editing/producing for 365/RÚV for a couple of years...',
    '...worked in a startup named Klang, based in Berlin...',
    '...and am currently working the startup, GameSmash, based in Iceland.',
  ],
  education: ['I graduated from the University of Iceland with a Bs.c. in Software Engineering.'],
  other: [
    'I typically use the handle \'Magtastic\' on social media.',
    'I love spicy food and VIM.',
    'I stream livestream my coding sessions from time to time.',
    'type "open twitch" to open my twitch account.',
  ],
  contact: ['Phone: +354 847 0454', 'Email: Magnusol93@gmail.com'],
  programming: [
    'Love:',
    ' - JavaScript',
    ' - VIM',
    ' - Node',
    ' - React',
    ' - React Native',
    ' - ReasonML',
    ' - Firebase',
    ' - Google Cloud Platform',
    ' - Zolang',
    '===============',
    'Like:',
    ' - Python',
    ' - Ruby',
    ' - GoLang',
    ' - Swift',
    ' - GraphQL',
    ' - Amazon Web Services',
    '===============',
    'Know:',
    ' - Java',
    ' - C++',
    ' - C#',
    '===============',
    'Hate The Fact That I Know:',
    ' - XCode',
    ' - Android Studio',
    ' - Build Times...',
  ],
};

export const HELP_FOR_COMMANDS = {
  'list-commands': [
    'Usage: list-commands',
    '',
    'Description:',
    'Lists all valid commands in MagTerm',
  ],
  about: [
    'Usage: about',
    '',
    'Description:',
    'Displays a short description of me',
  ],
  work: [
    'Usage: work',
    '',
    'Description:',
    'Displays a list of work that I have done',
  ],
  education: [
    'Usage: education',
    '',
    'Description:',
    'Displays summary of my education',
  ],
  other: [
    'Usage: social',
    '',
    'Description:',
    'Displays some other random facts about me',
  ],
  clear: [
    'Usage: clear',
    '',
    'Description:',
    'Clears your MagTerm histroy',
  ],
  contact: [
    'Usage: contact',
    '',
    'Description:',
    'Displays contact information',
  ],
  open: [
    'Usage: open <site>',
    '',
    'Where <site> is one of the following',
    ...VALID_SOCIAL_MEDIAS,
    '',
    'Description:',
    'Opens <site> in another tab',
  ],
  programming: [
    'Usage: programming',
    '',
    'Description:',
    'Displays a list that should describe me as a programmer in some way',
  ],
};

export const ANSWER_FOR_UNKNOWN_COMMAND = command => ([`command not found: ${command}`]);
export const ANSWER_FOR_INVALID_COMMAND = command => ([`not correct usage of: '${command}', checkout '${command} --help'`]);
