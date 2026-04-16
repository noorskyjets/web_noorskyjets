/** Web3Forms access key from https://web3forms.com — set in `.env.local` as VITE_WEB3FORMS_ACCESS_KEY */
export const WEB3FORMS_ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim() ?? '';
export const CONTACT_WEBHOOK_URL = (import.meta.env.VITE_CONTACT_WEBHOOK_URL as string | undefined)?.trim() ?? '';

export const CONTACT_FORM_READY = WEB3FORMS_ACCESS_KEY.length > 0 || CONTACT_WEBHOOK_URL.length > 0;
