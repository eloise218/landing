export function trackLandingView(landingName: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'landing_view', {
      landing_name: landingName,
      page_path: window.location.pathname,
    });
  }
}

export function trackCreateAccountClick(landingName: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'create_account_click', {
      landing_name: landingName,
      button_name: 'create_account',
      transport_type: 'beacon',
    });
  }
}
