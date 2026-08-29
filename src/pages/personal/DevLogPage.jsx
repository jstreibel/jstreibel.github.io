import { useEffect } from 'react';

import BlogEntry from '../../components/BlogEntry';

const entries = [
  {
    format: 'md',
    body: `
## 2026-08-29

### 17:29 PM BRT
I need a way to annotate the data. I just realized that's a fully manual endeavor. The only way I see is listening to every recording and labeling it manually. Sounds boring, but I don't see a workaround. People get paid well for annotating data. It sits at the core of machine learning.

On to annotating.

### 4:49 PM BRT
Here's the \`ffmpeg\` args being used:

\`\`\`bash
ffmpeg -f pulse \\
  -i alsa_input.usb-046d_Logitech_StreamCam_2F08C626-02.analog-stereo \\
  -ac 1 \\
  -c:a flac \\
  -f segment \\
  -segment_time 600 \\
  -segment_atclocktime 1 \\
  -reset_timestamps 1
  -strftime 1 \\
  './%Y-%m-%d_%H-%M-%S.flac'
\`\`\`

This outputs a single channel, segmenting output to files every 10 min (600s) matching wall-clock (e.g. 10:10PM, 10:20PM, etc). In particular, it is explicitly using my Logitech camera (had to put this manually as otherwise default is the earlier mentioned C-1U). And, of course lossless FLAC format.

I should leave it recording for a few days.

### 4:28 PM BRT

Considering long audio recording periods will be used for audio data acquisition, format of choice is FLAC as it records lossless, small file sizes.

As for recording software, requirements are:
- Records FLAC;
- Highly configurable (sampling rate, segment times, recording backend, etc).
- Allows long recordings to output constantly to multiple files.

Options considered are:
- Reco. Very simple.
- Audacity. Powerful, allows editing.
- Oceanaudio. Great middle ground.
- FFmpeg. CLI, very complete otherwise.
- arecord. Like FFmpeg but much simpler. Does not natively support FLAC.

FFmpeg seems like the natural choice, particularly if Gepetto (ChatGPT) helps me figure out CLI command details.

### 00:46 BRT

To my surprise, the C-1U didn't capture the pump's lower/main frequencies very well (multiples of 60Hz). And it is producing an irritating noise on higher freq bands. I'm pretty sure its the old USB cable. The little mic has known a little too much salty sea air from the old days.

But enough for today.

## 2026-08-28

### 11:39 PM BRT
#### First mic test
Tried recording with an old Behringer C-1U microphone. Initial result is noise-saturated on the 60Hz band. As that's also our power grid's frequency, I figured it is lack of proper grounding. But who's the culprit among a myriad cables? ChatGPT helped me zero in on the HDMI cable, as apparently it has an analog channel that could be leaking the hum. Not sure about that, but it suggested I use DP instead. Worked like a charm.

### 10:02 PM BRT

In the building I live there\'s a pump that takes volumes of water against gravity to a tank some 15 stories up. As you might guess, the pump is noisy and power hungry as moving tons of water up a distance takes a *lot* of energy and stress. Worst off, it turns on/off depending solely on tank level and does not take into account whether it is late hours and/or grid energy price.

I'd love to have extensive (ish) data on whether the pump is on or off, so I can compare it against allowed noise time and energy price. Three options popped in my head:
1. **Manual approach** (chaotic): take notes by hand, based on my hearing.
2. **Signal approach** (non-deterministic): since I have a few good enough microphones around, I'd run environment sound data through a function that transform audio signal into (my beloved) boolean data. I'll call this the signal approach.
3. **Direct approach** (deterministic): I could (try and gain) access (to) the building's machine room, install or access sensors at the pump and obtain / derive its operating state directly.

First option is boring and honestly I'd rather not, but the two other look fun. The fact that I've been flirting with machine learning helps breaking choice to option 2. That and the fact I likely wouldn't be allowed in the building's machine room (engineers only?). But I'd stick to option 2 anyway.

Good.

`,
  },
];

export default function DevLogPage() {
  useEffect(() => {
    document.title = 'DevLog | João Streibel';
  }, []);

  return (
    <>
      <h1>DevLog</h1>
      <p>Notes on things I&apos;m building, learning, and figuring out. Latest posts first. </p>

      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        entries.map(({ date, time, title, body, format }) => (
          <BlogEntry
            key={`${date}-${time}-${title}`}
            body={body}
            format={format}
          />
        ))
      )}
    </>
  );
}
