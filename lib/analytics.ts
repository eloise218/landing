export function trackCtaClick(landingName: string, buttonName: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'cta_click', {
      landing_name: landingName,
      button_name: buttonName,
      transport_type: 'beacon',
    });
  }
}

export function trackPurchase(params: {
  transactionId: string;
  value: number;
  currency: string;
  itemId: string;
  itemName: string;
}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'purchase', {
      transaction_id: params.transactionId,
      value: params.value,
      currency: params.currency,
      items: [
        {
          item_id: params.itemId,
          item_name: params.itemName,
          price: params.value,
          quantity: 1,
        },
      ],
    });
  }
}
