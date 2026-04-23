declare namespace JSX {
  interface IntrinsicElements {
    'ms-store-badge': {
      productid: string
      productname: string
      'window-mode': 'direct' | 'popup' | string
      theme?: 'light' | 'dark' | 'auto' | string
      size?: 'small' | 'large' | string
      language?: string
      animation?: 'on' | 'off' | string
    }
  }
}
