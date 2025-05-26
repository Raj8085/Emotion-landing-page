// // mock list of articles
// export const articles = [
//   {
//     slug: 'how-do-i-get-tested-for-stis',
//     category: 'FAQS – SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
//     title: 'How do I get tested for STIs?',
//     image: '/SHW/faq_question_marks.svg',
//   },
//   {
//     slug: 'if-using-other-bc-still-use-condoms',
//     category: 'FAQS – SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
//     title: "If I'm using another method of birth control, do I still have to use condoms?",
//     image: '/SHW/faq_question_marks.svg',
//   },
//   {
//     slug: 'everything-about-mpox',
//     category: 'SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
//     title: "Here's everything you need to know about mpox",
//     subtitle: "Don't panic, just get the facts",
//     image: '/SHW/provider_perspectives_header.jpg',
//   },
//   // …add the rest…
// ];

// // mock full article contents keyed by slug
// export const articleContents = {
//   'how-do-i-get-tested-for-stis': {
//     title: 'How do I get tested for STIs?',
//     date: 'Feb 01, 2016',
//     updated: 'Mar 14, 2025',
//     content: `
//       <p>Depending on the STI and the type of sex you are having, tests for STIs are done in different ways. 
//       The tests for gonorrhea, chlamydia, and trichomoniasis are really simple; all you have to do is pee in a cup. 
//       Another way to test for these sexually transmitted infections (STIs) is a swab where you might have been exposed, 
//       for example the vagina or cervix, your throat, or your butt. The tests for HIV, syphilis, hepatitis B, and hepatitis C 
//       involve testing a blood sample. It could be a finger prick for a few drops of blood or you may need to have blood collected, 
//       depending on where you have your testing done. You can also get at-home tests for HIV and other STIs and use telehealth 
//       to get tested anonymously without leaving your house. You may want to be tested for other STIs, like herpes, depending on your symptoms; 
//       talk to a health care provider about whether other tests are a good idea.</p>
//     `,
//   },
//   'if-using-other-bc-still-use-condoms': {
//     title: 'How do I get tested for STIs?',
//     date: 'Feb 01, 2016',
//     updated: 'Mar 14, 2025',
//     content: `
//       <p>Depending on the STI and the type of sex you are having, tests for STIs are done in different ways. 
//       The tests for gonorrhea, chlamydia, and trichomoniasis are really simple; all you have to do is pee in a cup. 
//       Another way to test for these sexually transmitted infections (STIs) is a swab where you might have been exposed, 
//       for example the vagina or cervix, your throat, or your butt. The tests for HIV, syphilis, hepatitis B, and hepatitis C 
//       involve testing a blood sample. It could be a finger prick for a few drops of blood or you may need to have blood collected, 
//       depending on where you have your testing done. You can also get at-home tests for HIV and other STIs and use telehealth 
//       to get tested anonymously without leaving your house. You may want to be tested for other STIs, like herpes, depending on your symptoms; 
//       talk to a health care provider about whether other tests are a good idea.</p>
//     `,
//   },
//   // …other slug keys…
// };


// src/data/articles.js

// List of article cards
export const articles = [
  {
    slug: 'how-do-i-get-tested-for-stis',
    category: 'FAQS – SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
    title: 'How do I get tested for STIs?',
    image: '/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg',
    hasQuestionPattern: true,
  },
  {
    slug: 'if-using-other-bc-still-use-condoms',
    category: 'FAQS – SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
    title: "If I'm using another method of birth control, do I still have to use condoms?",
    image: '/SHW/faq_question_marks-12cc02f534646e9c41b2b62dd380b297bab076af0f938789e53822a88e551b81.svg',
    hasQuestionPattern: true,
  },
  {
    slug: 'everything-about-mpox',
    category: 'SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
    title: "Here's everything you need to know about mpox",
    subtitle: "Don't panic, just get the facts",
    image: '/SHW/provider_perspectives_header-44b4f94e01ec610c3de2b52585ef601d43bb8196a7253ae8e24896c8838e3.jpg',
    hasQuestionPattern: false,
  },
  {
    slug: 'chlamydia-its-not-as-pretty-as-it-sounds',
    category: 'SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
    title: "Chlamydia: it's not as pretty as it sounds",
    subtitle: "It's common to have no symptoms, but if left untreated, it can be serious",
    image: '/SHW/GettyImages-1256087897.jpg',
    hasQuestionPattern: false,
  },
  {
    slug: 'guide-to-bringing-up-sexual-health-with-someone-new',
    category: 'SEXUALLY TRANSMITTED INFECTIONS (STDS, STIS)',
    title: 'Your guide to bringing up sexual health with someone new',
    subtitle: "We promise, it doesn't have to be awkward",
    image: '/SHW/GettyImages-1312297068.jpg',
    hasQuestionPattern: false,
  }
];

// Full article contents, keyed by slug
export const articleContents = {
  'how-do-i-get-tested-for-stis': {
    title: 'How do I get tested for STIs?',
    date: 'Feb 01, 2016',
    updated: 'Mar 14, 2025',
    content: `
      <p>Depending on the STI and the type of sex you are having, tests for STIs are done in different ways. The tests for gonorrhea, chlamydia, and trichomoniasis are really simple; all you have to do is pee in a cup. Another way to test for these sexually transmitted infections (STIs) is a swab where you might have been exposed, for example the vagina or cervix, your throat, or your butt.</p>
      <p>The tests for HIV, syphilis, hepatitis B, and hepatitis C involve testing a blood sample—this could be a finger prick for a few drops of blood or a full blood draw, depending on where you have your testing done. You can also get at-home tests for HIV and other STIs and use telehealth to get tested anonymously without leaving your house.</p>
      <p>You may want to be tested for other STIs, like herpes, depending on your symptoms; talk to a health care provider about whether other tests are a good idea.</p>
    `
  },

  'if-using-other-bc-still-use-condoms': {
    title: "If I'm using another method of birth control, do I still have to use condoms?",
    date: 'Jan 10, 2018',
    updated: 'Apr 02, 2025',
    content: `
      <p>It depends on your situation. Unless you’re in a totally exclusive relationship and you and your partner have both been tested recently for every single STI, using condoms with whatever other birth control method you choose is a good idea. Basically, if there’s any chance you or your partner could have an STI, the only way to decrease the risk of transmitting it is by using condoms, internal condoms, dental dams, and/or PrEP, (a medication which decreases the risk of getting HIV.) Other forms of birth control don’t protect against STIs.</p>
      <p>Using a condom with another form of birth control is called dual protection. It means you’re being super-safe and protecting yourself against both pregnancy and STIs.</p>
    `
  },

  'everything-about-mpox': {
    title: "Here's everything you need to know about mpox",
    date: 'Nov 20, 2022',
    updated: 'Feb 15, 2025',
    content: `
      <p>Mpox (formerly known as monkeypox) is a viral infection that can spread through close contact with an infected person. Symptoms include fever, headache, muscle aches, and a distinctive rash.</p>
      <p>It’s usually self-limiting, but some people may require antiviral treatment. Vaccines originally developed for smallpox can also provide protection against mpox.</p>
      <p>If you think you’ve been exposed or are experiencing symptoms, contact your health care provider immediately.</p>
    `
  },

  'chlamydia-its-not-as-pretty-as-it-sounds': {
    title: "Chlamydia: it's not as pretty as it sounds",
    date: 'Mar 12, 2019',
    updated: 'Jan 25, 2025',
    content: `
      <p>Chlamydia is one of the most common sexually transmitted infections. Many people have no symptoms, which means it can go undiagnosed and untreated.</p>
      <p>If left untreated, chlamydia can lead to pelvic inflammatory disease (PID), infertility, and complications during pregnancy. The good news is it’s easily treated with a short course of antibiotics.</p>
      <p>Regular screening is recommended for sexually active people under 25 and anyone with new or multiple partners.</p>
    `
  },

  'guide-to-bringing-up-sexual-health-with-someone-new': {
    title: 'Your guide to bringing up sexual health with someone new',
    date: 'Jun 05, 2020',
    updated: 'Dec 10, 2024',
    content: `
      <p>Talking about sexual health can feel awkward, but it’s a key part of building trust with a new partner. Choose a time when you both feel relaxed and open to conversation.</p>
      <p>Start by sharing your own STI testing history and birth control preferences, then invite your partner to share theirs. Use “I” statements to keep the tone non-accusatory.</p>
      <p>Remember, if a partner reacts negatively or refuses to discuss it, that’s a red flag. You deserve someone who respects your health and boundaries.</p>
    `
  }
};
