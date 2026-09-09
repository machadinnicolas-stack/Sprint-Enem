/**
 * Central Configuration for Sprint ENEM Landing Page
 * All checkout actions and tracking point to this single source of truth.
 */

export const PRODUCT_NAME = "Sprint ENEM";
export const PRICE = "R$ 12,99";
export const BUNDLE_PRICE = "R$ 22,98";

// Central Checkout Destination URL:
// Alter this single variable to change checkout destination across all CTAs
export const CHECKOUT_URL: string = "https://perfectpay.com.br";

export type AnalyticsEvent = 
  | 'hero_cta_click'
  | 'header_cta_click'
  | 'sticky_cta_click'
  | 'offer_cta_click'
  | 'final_cta_click'
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
export function handleCheckoutClick(source: AnalyticsEvent) {
  trackEvent(source, { timestamp: new Date().toISOString() });
  trackEvent('checkout_click', { source });
  
  // Navigate to checkout
  if (CHECKOUT_URL && CHECKOUT_URL !== '#') {
    window.location.href = CHECKOUT_URL;
  } else {
    // If URL is '#', scroll smoothly to offer section
    const offerEl = document.getElementById('oferta');
    if (offerEl) {
      offerEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
