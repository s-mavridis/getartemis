// UTM Parameter tracking utilities

export interface UTMParams {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}

const UTM_STORAGE_KEY = 'artemis_utm_params';

export function captureUTMParams(): void {
  if (typeof window === 'undefined') return;
  
  const urlParams = new URLSearchParams(window.location.search);
  const utmParams: UTMParams = {};
  
  // Capture standard UTM parameters
  if (urlParams.get('utm_source')) utmParams.source = urlParams.get('utm_source')!;
  if (urlParams.get('utm_medium')) utmParams.medium = urlParams.get('utm_medium')!;
  if (urlParams.get('utm_campaign')) utmParams.campaign = urlParams.get('utm_campaign')!;
  if (urlParams.get('utm_term')) utmParams.term = urlParams.get('utm_term')!;
  if (urlParams.get('utm_content')) utmParams.content = urlParams.get('utm_content')!;
  
  // Also capture simple 'source' parameter
  if (urlParams.get('source')) utmParams.source = urlParams.get('source')!;
  
  // Only store if we have any params
  if (Object.keys(utmParams).length > 0) {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmParams));
  }
}

export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

export function getAdSource(): string | null {
  const params = getStoredUTMParams();
  return params.source || null;
}

export function clearUTMParams(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(UTM_STORAGE_KEY);
}
