export class Scale {
  constructor(tone) {
    const MAJOR_TONES = [
      'C',
      'G',
      'D',
      'A',
      'E',
      'B',
      'F#',
      'a',
      'e',
      'b',
      'f#',
      'c#',
      'g#',
      'd#',
    ];
    const MAJOR_NOTES = [
      'A',
      'A#',
      'B',
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
    ];
    const MINOR_NOTES = [
      'A',
      'Bb',
      'B',
      'C',
      'Db',
      'D',
      'Eb',
      'E',
      'F',
      'Gb',
      'G',
      'Ab',
    ];

    const baseNotes = MAJOR_TONES.includes(tone) ? MAJOR_NOTES : MINOR_NOTES;

    let [char1, char2 = ''] = tone;
    this._startNote = char1.toUpperCase() + char2;

    const indexOfStartNote = baseNotes.indexOf(this._startNote);

    this._chromatic = baseNotes
      .slice(indexOfStartNote)
      .concat(baseNotes.slice(0, indexOfStartNote));
  }

  chromatic() {
    return this._chromatic;
  }

  interval(intervals) {
    return [...intervals]
      .map((char) => (char === 'M' ? 2 : char === 'A' ? 3 : 1))
      .reduce(
        (scale, interval) => {
          const lastNote = scale[scale.length - 1];
          const chromatic = this.chromatic();
          const chromaticLength = chromatic.length;

          const thisNotePosition =
            (chromatic.indexOf(lastNote) + interval) % chromaticLength;

          const thisNote = chromatic[thisNotePosition];

          scale.push(thisNote);

          return scale;
        },
        [this._startNote]
      )
      .slice(0, -1);
  }
}
