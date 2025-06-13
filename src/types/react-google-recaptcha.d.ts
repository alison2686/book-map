// types/react-google-recaptcha.d.ts
declare module 'react-google-recaptcha' {
  import * as React from 'react';

  export interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (value: string | null) => void;
    onErrored?: () => void;
    onExpired?: () => void;
    theme?: 'light' | 'dark';
    size?: 'compact' | 'normal' | 'invisible';
    tabindex?: number;
    hl?: string;
    badge?: 'bottomright' | 'bottomleft' | 'inline';
    isolated?: boolean;
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {}
}
