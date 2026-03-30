export function trackCtaClick(landingName: string, buttonName: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', {
      landing_name: landingName,
      button_name: buttonName,
      transport_type: 'beacon',
    });
  }
}
