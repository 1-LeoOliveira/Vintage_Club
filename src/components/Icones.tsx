interface Props {
  /** Tamanho em pixels, lado a lado. */
  tamanho?: number;
}

export function IconeInstagram({ tamanho = 18 }: Props) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconeWhatsApp({ tamanho = 18 }: Props) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35a9.93 9.93 0 0 0 4.87 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 1.84c2.17 0 4.2.84 5.74 2.38a8.07 8.07 0 0 1 2.38 5.74c0 4.49-3.64 8.13-8.13 8.13a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.8.82-2.99-.19-.31a8.07 8.07 0 0 1-1.24-4.32c0-4.48 3.64-8.12 8.12-8.12Z" />
      <path d="M9.43 7.1c-.18-.42-.38-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.71 2.73 4.2 3.72 2.07.82 2.5.66 2.95.62.44-.04 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.23-.16-.47-.29-.25-.12-1.45-.71-1.67-.79-.23-.08-.39-.12-.56.13-.16.24-.63.79-.78.95-.14.17-.28.19-.53.07-.24-.13-1.03-.38-1.96-1.21-.73-.65-1.22-1.45-1.36-1.69-.15-.25-.02-.38.1-.5.12-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82Z" />
    </svg>
  );
}
