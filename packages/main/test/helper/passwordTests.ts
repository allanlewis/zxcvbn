export default [
  {
    calcTime: 0,
    password: '1q2w3e4r5t',
    guesses: 364,
    guessesLog10: 2.5611013836490555,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 9,
        token: '1q2w3e4r5t',
        matchedWord: '1q2w3e4r5t',
        rank: 363,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: false,
        baseGuesses: 363,
        uppercaseVariations: 1,
        l33tVariations: 1,
        guesses: 363,
        guessesLog10: 2.559906625036112,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 13104,
      onlineNoThrottling10PerSecond: 36.4,
      offlineSlowHashing1e4PerSecond: 0.0364,
      offlineFastHashing1e10PerSecond: 3.64e-8,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '4 hours',
      onlineNoThrottling10PerSecond: '36 seconds',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 0,
    feedback: {
      warning: 'This is a commonly used password.',
      suggestions: ['Add more words that are less common.'],
    },
  },
  {
    calcTime: 0,
    password: '1Q2w3e4r5t',
    guesses: 727,
    guessesLog10: 2.8615344108590377,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 9,
        token: '1Q2w3e4r5t',
        matchedWord: '1q2w3e4r5t',
        rank: 363,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: false,
        baseGuesses: 363,
        uppercaseVariations: 2,
        l33tVariations: 1,
        guesses: 726,
        guessesLog10: 2.8609366207000932,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 26172,
      onlineNoThrottling10PerSecond: 72.7,
      offlineSlowHashing1e4PerSecond: 0.0727,
      offlineFastHashing1e10PerSecond: 7.27e-8,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '7 hours',
      onlineNoThrottling10PerSecond: '1 minute',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 0,
    feedback: {
      warning: 'This is a commonly used password.',
      suggestions: ['Add more words that are less common.'],
    },
  },
  {
    calcTime: 0,
    password: '1q2w3e4r5T',
    guesses: 727,
    guessesLog10: 2.8615344108590377,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 9,
        token: '1q2w3e4r5T',
        matchedWord: '1q2w3e4r5t',
        rank: 363,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: false,
        baseGuesses: 363,
        uppercaseVariations: 2,
        l33tVariations: 1,
        guesses: 726,
        guessesLog10: 2.8609366207000932,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 26172,
      onlineNoThrottling10PerSecond: 72.7,
      offlineSlowHashing1e4PerSecond: 0.0727,
      offlineFastHashing1e10PerSecond: 7.27e-8,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '7 hours',
      onlineNoThrottling10PerSecond: '1 minute',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 0,
    feedback: {
      warning: 'This is a commonly used password.',
      suggestions: ['Add more words that are less common.'],
    },
  },
  {
    calcTime: 0,
    password: 'abcdefg123',
    guesses: 15000,
    guessesLog10: 4.176091259055681,
    sequence: [
      {
        pattern: 'sequence',
        i: 0,
        j: 6,
        token: 'abcdefg',
        sequenceName: 'lower',
        sequenceSpace: 26,
        ascending: true,
        guesses: 50,
        guessesLog10: 1.6989700043360185,
      },
      {
        pattern: 'sequence',
        i: 7,
        j: 9,
        token: '123',
        sequenceName: 'digits',
        sequenceSpace: 10,
        ascending: true,
        guesses: 50,
        guessesLog10: 1.6989700043360185,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 540000,
      onlineNoThrottling10PerSecond: 1500,
      offlineSlowHashing1e4PerSecond: 1.5,
      offlineFastHashing1e10PerSecond: 0.0000015,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '6 days',
      onlineNoThrottling10PerSecond: '25 minutes',
      offlineSlowHashing1e4PerSecond: '2 seconds',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 1,
    feedback: {
      warning: 'Common character sequences like "abc" are easy to guess.',
      suggestions: [
        'Add more words that are less common.',
        'Avoid common character sequences.',
      ],
    },
  },
  {
    calcTime: 0,
    password: 'TESTERINO',
    guesses: 2486000,
    guessesLog10: 6.395501124305626,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 5,
        token: 'TESTER',
        matchedWord: 'tester',
        rank: 619,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: false,
        baseGuesses: 619,
        uppercaseVariations: 2,
        l33tVariations: 1,
        guesses: 1238,
        guessesLog10: 3.092720644684099,
      },
      {
        pattern: 'bruteforce',
        token: 'INO',
        i: 6,
        j: 8,
        guesses: 1000,
        guessesLog10: 2.9999999999999996,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 89496000,
      onlineNoThrottling10PerSecond: 248600,
      offlineSlowHashing1e4PerSecond: 248.6,
      offlineFastHashing1e10PerSecond: 0.0002486,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '3 years',
      onlineNoThrottling10PerSecond: '3 days',
      offlineSlowHashing1e4PerSecond: '4 minutes',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 2,
    feedback: {
      warning: 'This is similar to a commonly used password.',
      suggestions: [
        'Add more words that are less common.',
        'Capitalize some, but not all letters.',
      ],
    },
  },
  {
    calcTime: 0,
    password: 'aaaaaaa',
    guesses: 43,
    guessesLog10: 1.6334684555795864,
    sequence: [
      {
        pattern: 'repeat',
        i: 0,
        j: 6,
        token: 'aaaaaaa',
        baseToken: 'a',
        baseGuesses: 6,
        repeatCount: 7,
        guesses: 42,
        guessesLog10: 1.6232492903979003,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 1548,
      onlineNoThrottling10PerSecond: 4.3,
      offlineSlowHashing1e4PerSecond: 0.0043,
      offlineFastHashing1e10PerSecond: 4.3e-9,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '26 minutes',
      onlineNoThrottling10PerSecond: '4 seconds',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 0,
    feedback: {
      warning: 'Repeated characters like "aaa" are easy to guess.',
      suggestions: [
        'Add more words that are less common.',
        'Avoid repeated words and characters.',
      ],
    },
  },
  {
    calcTime: 0,
    password: 'Daniel',
    guesses: 109,
    guessesLog10: 2.0374264979406234,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 5,
        token: 'Daniel',
        matchedWord: 'daniel',
        rank: 54,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: false,
        baseGuesses: 54,
        uppercaseVariations: 2,
        l33tVariations: 1,
        guesses: 108,
        guessesLog10: 2.0334237554869494,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 3924,
      onlineNoThrottling10PerSecond: 10.9,
      offlineSlowHashing1e4PerSecond: 0.0109,
      offlineFastHashing1e10PerSecond: 1.09e-8,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '1 hour',
      onlineNoThrottling10PerSecond: '11 seconds',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 0,
    feedback: {
      warning: 'This is a frequently used password.',
      suggestions: [
        'Add more words that are less common.',
        'Capitalize more than the first letter.',
      ],
    },
  },
  {
    calcTime: 0,
    password: '1234qwer',
    guesses: 105,
    guessesLog10: 2.021189299069938,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 7,
        token: '1234qwer',
        matchedWord: '1234qwer',
        rank: 104,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: false,
        baseGuesses: 104,
        uppercaseVariations: 1,
        l33tVariations: 1,
        guesses: 104,
        guessesLog10: 2.0170333392987803,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 3780,
      onlineNoThrottling10PerSecond: 10.5,
      offlineSlowHashing1e4PerSecond: 0.0105,
      offlineFastHashing1e10PerSecond: 1.05e-8,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '1 hour',
      onlineNoThrottling10PerSecond: '11 seconds',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 0,
    feedback: {
      warning: 'This is a commonly used password.',
      suggestions: ['Add more words that are less common.'],
    },
  },
  {
    calcTime: 0,
    password: '1234qwe',
    guesses: 2978,
    guessesLog10: 3.473924693416157,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 6,
        token: '1234qwe',
        matchedWord: '1234qwe',
        rank: 2977,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: false,
        baseGuesses: 2977,
        uppercaseVariations: 1,
        l33tVariations: 1,
        guesses: 2977,
        guessesLog10: 3.4737788346467244,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 107208,
      onlineNoThrottling10PerSecond: 297.8,
      offlineSlowHashing1e4PerSecond: 0.2978,
      offlineFastHashing1e10PerSecond: 2.978e-7,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '1 day',
      onlineNoThrottling10PerSecond: '5 minutes',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 1,
    feedback: {
      warning: 'This is a commonly used password.',
      suggestions: ['Add more words that are less common.'],
    },
  },
  {
    calcTime: 0,
    password: '1234qwert',
    guesses: 12288,
    guessesLog10: 4.089481202687437,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 7,
        token: '1234qwer',
        matchedWord: '1234qwer',
        rank: 104,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: false,
        baseGuesses: 104,
        uppercaseVariations: 1,
        l33tVariations: 1,
        guesses: 104,
        guessesLog10: 2.0170333392987803,
      },
      {
        pattern: 'bruteforce',
        token: 't',
        i: 8,
        j: 8,
        guesses: 11,
        guessesLog10: 1.041392685158225,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 442368,
      onlineNoThrottling10PerSecond: 1228.8,
      offlineSlowHashing1e4PerSecond: 1.2288,
      offlineFastHashing1e10PerSecond: 0.0000012288,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '5 days',
      onlineNoThrottling10PerSecond: '20 minutes',
      offlineSlowHashing1e4PerSecond: '1 second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 1,
    feedback: {
      warning: 'This is similar to a commonly used password.',
      suggestions: ['Add more words that are less common.'],
    },
  },
  {
    calcTime: 0,
    password: 'password',
    guesses: 3,
    guessesLog10: 0.4771212547196623,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 7,
        token: 'password',
        matchedWord: 'password',
        rank: 2,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: false,
        baseGuesses: 2,
        uppercaseVariations: 1,
        l33tVariations: 1,
        guesses: 2,
        guessesLog10: 0.30102999566398114,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 108,
      onlineNoThrottling10PerSecond: 0.3,
      offlineSlowHashing1e4PerSecond: 0.0003,
      offlineFastHashing1e10PerSecond: 3e-10,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '2 minutes',
      onlineNoThrottling10PerSecond: 'less than a second',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 0,
    feedback: {
      warning: 'This is a heavily used password.',
      suggestions: ['Add more words that are less common.'],
    },
  },
  {
    calcTime: 0,
    password: '2010abc',
    guesses: 15000,
    guessesLog10: 4.176091259055681,
    sequence: [
      {
        pattern: 'regex',
        token: '2010',
        i: 0,
        j: 3,
        regexName: 'recentYear',
        regexMatch: ['2010'],
        guesses: 50,
        guessesLog10: 1.6989700043360185,
      },
      {
        pattern: 'sequence',
        i: 4,
        j: 6,
        token: 'abc',
        sequenceName: 'lower',
        sequenceSpace: 26,
        ascending: true,
        guesses: 50,
        guessesLog10: 1.6989700043360185,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 540000,
      onlineNoThrottling10PerSecond: 1500,
      offlineSlowHashing1e4PerSecond: 1.5,
      offlineFastHashing1e10PerSecond: 0.0000015,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '6 days',
      onlineNoThrottling10PerSecond: '25 minutes',
      offlineSlowHashing1e4PerSecond: '2 seconds',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 1,
    feedback: {
      warning: 'Recent years are easy to guess.',
      suggestions: [
        'Add more words that are less common.',
        'Avoid recent years.',
        'Avoid years that are associated with you.',
      ],
    },
  },
  {
    calcTime: 0,
    password: 'abcabcabcabc',
    guesses: 53,
    guessesLog10: 1.724275869600789,
    sequence: [
      {
        pattern: 'repeat',
        i: 0,
        j: 11,
        token: 'abcabcabcabc',
        baseToken: 'abc',
        baseGuesses: 13,
        repeatCount: 4,
        guesses: 52,
        guessesLog10: 1.716003343634799,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 1908,
      onlineNoThrottling10PerSecond: 5.3,
      offlineSlowHashing1e4PerSecond: 0.0053,
      offlineFastHashing1e10PerSecond: 5.3e-9,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '32 minutes',
      onlineNoThrottling10PerSecond: '5 seconds',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 0,
    feedback: {
      warning:
        'Repeated character patterns like "abcabcabc" are easy to guess.',
      suggestions: [
        'Add more words that are less common.',
        'Avoid repeated words and characters.',
      ],
    },
  },
  {
    calcTime: 0,
    password: 'qwer',
    guesses: 1294,
    guessesLog10: 3.111934276332681,
    sequence: [
      {
        pattern: 'spatial',
        i: 0,
        j: 3,
        token: 'qwer',
        graph: 'qwerty',
        turns: 1,
        shiftedCount: 0,
        guesses: 1293,
        guessesLog10: 3.1115985248803937,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 46584,
      onlineNoThrottling10PerSecond: 129.4,
      offlineSlowHashing1e4PerSecond: 0.1294,
      offlineFastHashing1e10PerSecond: 1.294e-7,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '13 hours',
      onlineNoThrottling10PerSecond: '2 minutes',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 1,
    feedback: {
      warning: 'Straight rows of keys are easy to guess.',
      suggestions: [
        'Add more words that are less common.',
        'Use longer keyboard patterns and change typing direction multiple times.',
      ],
    },
  },
  {
    calcTime: 0,
    password: 'P4$$w0rd',
    guesses: 33,
    guessesLog10: 1.5185139398778873,
    sequence: [
      {
        pattern: 'dictionary',
        i: 0,
        j: 7,
        token: 'P4$$w0rd',
        matchedWord: 'password',
        rank: 2,
        dictionaryName: 'passwords',
        reversed: false,
        l33t: true,
        sub: {
          0: 'o',
          4: 'a',
          $: 's',
        },
        subDisplay: '0 -> o, 4 -> a, $ -> s',
        baseGuesses: 2,
        uppercaseVariations: 2,
        l33tVariations: 8,
        guesses: 32,
        guessesLog10: 1.5051499783199058,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 1188,
      onlineNoThrottling10PerSecond: 3.3,
      offlineSlowHashing1e4PerSecond: 0.0033,
      offlineFastHashing1e10PerSecond: 3.3e-9,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '20 minutes',
      onlineNoThrottling10PerSecond: '3 seconds',
      offlineSlowHashing1e4PerSecond: 'less than a second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 0,
    feedback: {
      warning: 'This is similar to a commonly used password.',
      suggestions: [
        'Add more words that are less common.',
        'Capitalize more than the first letter.',
        "Avoid predictable letter substitutions like '@' for 'a'.",
      ],
    },
  },
  {
    calcTime: 0,
    password: 'aA!1',
    guesses: 10001,
    guessesLog10: 4.000043427276863,
    sequence: [
      {
        pattern: 'bruteforce',
        token: 'aA!1',
        i: 0,
        j: 3,
        guesses: 10000,
        guessesLog10: 4,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 360036,
      onlineNoThrottling10PerSecond: 1000.1,
      offlineSlowHashing1e4PerSecond: 1.0001,
      offlineFastHashing1e10PerSecond: 0.0000010001,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: '4 days',
      onlineNoThrottling10PerSecond: '17 minutes',
      offlineSlowHashing1e4PerSecond: '1 second',
      offlineFastHashing1e10PerSecond: 'less than a second',
    },
    score: 1,
    feedback: {
      warning: '',
      suggestions: ['Add more words that are less common.'],
    },
  },
  {
    calcTime: 0,
    password: 'dgo9dsghasdoghi8/!&IT/§(ihsdhf8o7o',
    guesses: 2.34e33,
    guessesLog10: 33.36921585741014,
    sequence: [
      {
        pattern: 'bruteforce',
        token: 'dgo9dsg',
        i: 0,
        j: 6,
        guesses: 10000000,
        guessesLog10: 7,
      },
      {
        pattern: 'dictionary',
        i: 7,
        j: 9,
        token: 'has',
        matchedWord: 'has',
        rank: 24,
        dictionaryName: 'wikipedia',
        reversed: false,
        l33t: false,
        baseGuesses: 24,
        uppercaseVariations: 1,
        l33tVariations: 1,
        guesses: 50,
        guessesLog10: 1.6989700043360185,
      },
      {
        pattern: 'dictionary',
        i: 10,
        j: 11,
        token: 'do',
        matchedWord: 'do',
        rank: 24,
        dictionaryName: 'commonWords',
        reversed: false,
        l33t: false,
        baseGuesses: 24,
        uppercaseVariations: 1,
        l33tVariations: 1,
        guesses: 50,
        guessesLog10: 1.6989700043360185,
      },
      {
        pattern: 'sequence',
        i: 12,
        j: 14,
        token: 'ghi',
        sequenceName: 'lower',
        sequenceSpace: 26,
        ascending: true,
        guesses: 78,
        guessesLog10: 1.8920946026904801,
      },
      {
        pattern: 'bruteforce',
        token: '8/!&IT/§(ihsdhf8o7o',
        i: 15,
        j: 33,
        guesses: 10000000000000000000,
        guessesLog10: 19,
      },
    ],
    crackTimesSeconds: {
      onlineThrottling100PerHour: 8.424e34,
      onlineNoThrottling10PerSecond: 2.34e32,
      offlineSlowHashing1e4PerSecond: 2.34e29,
      offlineFastHashing1e10PerSecond: 2.34e23,
    },
    crackTimesDisplay: {
      onlineThrottling100PerHour: 'centuries',
      onlineNoThrottling10PerSecond: 'centuries',
      offlineSlowHashing1e4PerSecond: 'centuries',
      offlineFastHashing1e10PerSecond: 'centuries',
    },
    score: 4,
    feedback: {
      warning: '',
      suggestions: [],
    },
  },
]
