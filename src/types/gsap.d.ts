declare module "gsap-trial/SplitText" {
  interface SplitTextVars {
    type?: string;
    linesClass?: string;
    [key: string]: unknown;
  }

  export default class SplitText {
    constructor(
      target: string | Element | (string | Element)[],
      vars?: SplitTextVars
    );

    chars: Element[];
    words: Element[];
    lines: Element[];

    revert(): void;
  }
}