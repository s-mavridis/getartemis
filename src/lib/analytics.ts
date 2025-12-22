/**
 * Analytics utility for GTM dataLayer event tracking
 */

type EventData = Record<string, unknown>;

/**
 * Push an event to the GTM dataLayer
 */
export function trackEvent(eventName: string, eventData: EventData = {}): void {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
  }
  
  // Also log to console in development for debugging
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`, eventData);
  }
}

/**
 * Track page view event
 */
export function trackPageView(landingPage: string, adSource: string | null): void {
  trackEvent('page_view', {
    ad_source: adSource,
    landing_page: landingPage,
    timestamp: new Date().toISOString()
  });
}

/**
 * Track CTA click event
 */
export function trackCTAClick(location: 'hero' | 'nav' | 'final_cta', landingPage: string): void {
  trackEvent('cta_clicked', {
    location,
    landing_page: landingPage
  });
}

/**
 * Track hero email entry event
 */
export function trackHeroEmailEntered(landingPage: string): void {
  trackEvent('hero_email_entered', {
    landing_page: landingPage
  });
}

/**
 * Track modal close event
 */
export function trackModalClosed(completed: boolean, landingPage: string): void {
  trackEvent('modal_closed', {
    completed,
    landing_page: landingPage
  });
}

/**
 * Track form submission event
 */
export function trackFormSubmission(landingPage: string, formType: 'standard' | 'support'): void {
  trackEvent('form_submitted', {
    landing_page: landingPage,
    form_type: formType
  });
}
