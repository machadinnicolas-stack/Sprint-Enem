/**
 * Central Configuration for Sprint ENEM Landing Page
 * All checkout actions and tracking point to this single source of truth.
 */

export const PRODUCT_NAME = "Sprint ENEM";
export const PRICE = "R$12,99";
export const BUNDLE_PRICE = "R$22,98";
export const SPRINT_PRICE = "R$12,99";
export const REDACAO_PRICE = "R$9,99";

// Central Checkout Destination URLs:
// Update these with the exact PerfectPay product links for each offer.
export const CHECKOUT_URL: string = "https://perfectpay.com.br";
export const CHECKOUT_URL_BUNDLE: string = "https://perfectpay.com.br";

export type AnalyticsEvent =
  | 'hero_cta_click'
  | 'header_cta_click'
  | 'sticky_cta_click'
  | 'offer_sprint_cta_click'
  | 'offer_bundle_cta_click'
  | 'final_cta_sprint_click'
  | 'final_cta_bundle_click'
  | 'mid_page_cta_click'
  | 'faq_open'
  | 'checkout_click';

/**
 * Dispatches analytics tracking events cleanly.
 * Prepared for plug-and-play connection with Meta Pixel, TikTok Pixel, Kwai Pixel, and Google Analytics.
 */
export function trackEvent(eventName: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    // Console log in dev for instant verification
    console.log(`[Analytics Event] -> ${eventName}`, payload ?? {});

    // Standard dataLayer push (GTM / GA4)
    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push({
        event: eventName,
        product: PRODUCT_NAME,
        ...payload,
      });
    }

    // Meta Pixel fbq if initialized
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('trackCustom', eventName, {
        product: PRODUCT_NAME,
        currency: 'BRL',
        ...payload,
      });
    }

    // TikTok Pixel ttq if initialized
    if (typeof (window as any).ttq?.track === 'function') {
      (window as any).ttq.track(eventName, payload);
    }

    // Kwai Pixel kwaiq if initialized
    if (typeof (window as any).kwaiq?.track === 'function') {
      (window as any).kwaiq.track(eventName, payload);
    }
  }
}

/**
 * Navigates to a given checkout URL and fires analytics.
 */
function goToCheckout(url: string, source: AnalyticsEvent) {
  trackEvent(source, { timestamp: new Date().toISOString() });
  trackEvent('checkout_click', { source });

  if (url && url !== '#') {
    window.location.href = url;
  } else {
    const offerEl = document.getElementById('oferta');
    if (offerEl) {
      offerEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/**
 * Handler for Sprint ENEM (base offer) checkout buttons.
 */
export function handleCheckoutClick(source: AnalyticsEvent) {
  goToCheckout(CHECKOUT_URL, source);
}

/**
 * Handler for Sprint ENEM + Sprint Redação (bundle offer) checkout buttons.
 */
export function handleBundleCheckoutClick(source: AnalyticsEvent) {
  goToCheckout(CHECKOUT_URL_BUNDLE, source);
}

/**
 * Scrolls smoothly to the offer section (#oferta).
 */
export function scrollToOffer() {
  const offerEl = document.getElementById('oferta');
  if (offerEl) {
    offerEl.scrollIntoView({ behavior: 'smooth' });
  }
}
