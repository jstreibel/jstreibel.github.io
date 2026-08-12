import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  identity: {
    name: 'João Streibel',
    email: 'jstreibel@protonmail.com',
    role: 'Physicist and Software Developer',
  },
  navigation: [
    { label: 'Home', to: '/' },
    { label: 'Professional', to: '/professional' },
    { label: 'Projects', to: '/projects' },
    { label: 'Notes', to: '/notes' },
    { label: 'About', to: '/about' },
  ],
  footerNote:
    "All words written by a human (that's me). The stack is newer now, but the site still aims for clarity and restraint.",
  home: {
    eyebrow: 'Thanks for visiting!',
    title: 'Welcome',
    tagline: "João Streibel's little site",
    intro: [
      'Loving father of a 2yo, proud husband to her mom.',
      'Physicist, programmer, and natural-born creative thinker. Sometimes a perfectionist, sometimes a chaotic creator.',
      "If you're wondering whether I could add value to your business, the professional section is the direct answer.",
    ],
    sections: [
      {
        title: 'Professional',
        description: 'How I approach technical work and where I add value.',
        linkLabel: 'Open profile',
        to: '/professional',
      },
      {
        title: 'Projects [WIP]',
        description: 'Selected projects and experiments in progress.',
        linkLabel: 'See projects',
        to: '/projects',
      },
      {
        title: 'Notes',
        description: 'Little essays, fragments, and decision logs.',
        linkLabel: 'Read notes',
        to: '/notes',
      },
      {
        title: 'About me',
        description: 'A short background and the things I care about.',
        linkLabel: 'More about me',
        to: '/about',
      },
    ],
  },
  professional: {
    title: 'Professional',
    subtitle: 'João Streibel · Physicist and Software Developer',
    lead: [
      'I work on complex technical problems where clarity, reliability, and measurable value matter. My approach combines analytical rigor with pragmatic execution, from architecture decisions to production-ready delivery.',
      "I believe there's no ideal solution for novel problems, only tradeoffs and risks to consider. I tackle complex, hard problems with the mindset of a kid passionate about the mechanisms of the world. I solve them with the intelligent sobriety they demand.",
    ],
    strengths: [
      {
        title: 'Core Strengths',
        text: 'Systems thinking, tradeoff analysis, and disciplined software engineering.',
      },
      {
        title: 'Focus Areas',
        text: 'Scientific and data-driven applications, backend architecture, and robust web solutions.',
      },
      {
        title: 'Collaboration',
        text: 'Clear communication, ownership mindset, and strong commitment to product impact.',
      },
    ],
  },
  about: {
    title: 'About',
    lead: 'A short background and what I care about.',
    paragraphs: [
      'I am a physicist and software developer focused on solving complex problems with practical, value-driven solutions.',
      'My approach combines curiosity, clear tradeoff analysis, and disciplined execution.',
    ],
  },
  projects: {
    title: 'Projects',
    lead: 'Selected work is still being organized, but the recurring themes are already clear.',
    items: [
      'Scientific tools and automations that improve real workflows.',
      'Web projects focused on clarity, performance, and maintainability.',
      'Experiments around architecture, product thinking, and engineering quality.',
    ],
  },
  notes: [
    {
      id: 'software-ai-part-2',
      title: 'What software has become with AI (part 2)',
      date: '2026-02-25',
      category: 'Essay',
      body: [
        'Codebase is now rendered. Or perhaps selected from a statistical ensemble of codebases that comply (enough and dependent on temperature) with specs.',
      ],
    },
    {
      id: 'software-ai',
      title: 'What software has become with AI',
      date: '2026-02-19',
      category: 'Essay',
      body: [
        "Think well. Anything can be done. Where's the value, though?",
        "Look at this little web site. It is very simple, technologically: HTML, CSS, and a tad winy bit Javascript. Hand-woven, almost. Now, whether vibe-coding or its formal, owned incarnation 'automatic programming', its is fairly simple to pogger around. In this new and {amazing|scary|impressive|wonderful} age of AI, one might be tempted to just let go of the hand-break, so to speak, and vibe into poggers wonderland.",
        "Valuable, much valuable in many cases. I wouldn't dare making an argument opposing the value of AI. But hand-crafted material, lets be honest, smells well. While this website design has mostly been vibed, a promise I make is that every single word you read in it has been written by a human, (most likely) me.",
      ],
    },
    {
      id: 'lately-on-my-mind',
      title: 'Lately on my mind',
      date: '2026-02-19',
      category: 'Fragment',
      body: ['An unsuspected beautiful marriage. See physics Nobel, 2024.'],
    },
    {
      id: 'debut-note',
      title: 'Debut note',
      date: '2026-02-19',
      category: 'Decision Log',
      body: ['First note ever in this little, personal website.'],
    },
  ],
};

const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {},
});

export const selectIdentity = (state) => state.site.identity;
export const selectNavigation = (state) => state.site.navigation;
export const selectFooterNote = (state) => state.site.footerNote;
export const selectHomeContent = (state) => state.site.home;
export const selectProfessionalContent = (state) => state.site.professional;
export const selectAboutContent = (state) => state.site.about;
export const selectProjectsContent = (state) => state.site.projects;
export const selectNotes = (state) => state.site.notes;

export default siteSlice.reducer;
