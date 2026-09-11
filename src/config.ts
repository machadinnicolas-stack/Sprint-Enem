/**
 * Central Configuration for Sprint ENEM Landing Page
 * All checkout actions and tracking point to this single source of truth.
 */

export const PRODUCT_NAME = "Sprint ENEM";
export const PRICE = "R$ 12,99";
export const BUNDLE_PRICE = "R$ 21,99";
export const ESSAY_ADDON_PRICE = "R$ 9,00";

// Central Checkout Destination URLs:
// Alter these variables to change checkout destinations across all CTAs.
export const CHECKOUT_URL: string = "https://perfectpay.com.br";

// TODO: replace with the real "Sprint ENEM + Sprint Redação" checkout link
// once it exists. Falls back to CHECKOUT_URL so no link is invented.
export const BUNDLE_CHECKOUT_URL: string = CHECKOUT_URL;

export type AnalyticsEvent =
  | 'hero_cta_click'
  | 'header_cta_click'
  | 'sticky_cta_click'
  | 'offer_enem_cta_click'
  | 'offer_bundle_cta_click'
  | 'final_enem_cta_click'
  | 'final_bundle_cta_click'
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
        price: PRICE,
        ...payload,
      });
    }

    // Meta Pixel fbq if initialized
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('trackCustom', eventName, {
        product: PRODUCT_NAME,
        value: 12.99,
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
 * Common handler for all checkout buttons
 */
export function handleCheckoutClick(source: AnalyticsEvent, url: string = CHECKOUT_URL) {
  trackEvent(source, { timestamp: new Date().toISOString() });
  trackEvent('checkout_click', { source });

  // Navigate to checkout
  if (url && url !== '#') {
    window.location.href = url;
  } else {
    // If URL is '#', scroll smoothly to offer section
    const offerEl = document.getElementById('oferta');
    if (offerEl) {
      offerEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/**
 * Scrolls to the offers section instead of jumping straight to checkout.
 * Used by top-of-page CTAs so the visitor can compare both offers first.
 */
export function scrollToOffer(source: AnalyticsEvent) {
  trackEvent(source, { timestamp: new Date().toISOString() });

  const offerEl = document.getElementById('oferta');
  if (offerEl) {
    offerEl.scrollIntoView({ behavior: 'smooth' });
  }
}
