'use client';
import React, {
  useEffect,
  useContext,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { gtag, initDataLayer, install } from 'ga-gtag';
import * as CookieConsent from 'vanilla-cookieconsent';

const G_TAG_ID = process?.env?.PUBLIC_GA_TRACKING_ID || 'G-XXXXXXXXXX'; // Replace with your actual Google Analytics ID

const Analytics = React.createContext([
  {},
  async () => {
    return undefined;
  },
]);

export function AnalyticsProvider({ children }) {
  const [enabled, setEnabled] = useState(false);

  const triggerEvent = useCallback(
    function (...data) {
      if (enabled) {
        gtag(...data);
      }
    },
    [enabled]
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      CookieConsent.run({
        categories: {
          necessary: {
            enabled: true, // this category is enabled by default
            readOnly: true, // this category cannot be disabled
          },
          analytics: {
            enabled: true, // this category is enabled by default
          },
        },

        language: {
          default: 'en',
          translations: {
            en: {
              consentModal: {
                title: 'We use cookies',
                description: 'Cookie modal description',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                showPreferencesBtn: 'Manage Individual preferences',
              },
              preferencesModal: {
                title: 'Manage cookie preferences',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                savePreferencesBtn: 'Accept current selection',
                closeIconLabel: 'Close modal',
                sections: [
                  {
                    title: 'Somebody said ... cookies?',
                    description: 'I want one!',
                  },
                  {
                    title: 'Strictly Necessary cookies',
                    description:
                      'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                    //this field will generate a toggle linked to the 'necessary' category
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Performance and Analytics',
                    description:
                      'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                    linkedCategory: 'analytics',
                  },
                  {
                    title: 'More information',
                    description:
                      'For any queries in relation to my policy on cookies and your choices, please see the contact section of the website.',
                  },
                ],
              },
            },
          },
        },
        onConsent: function () {
          if (CookieConsent.acceptedCategory('analytics')) {
            initDataLayer();
            install(G_TAG_ID);
            gtag('event', 'page_view', {
              page_path: window.location.pathname,
              page_title: document.title,
              page_location: window.location.href,
              
            });
            setEnabled(true);
          }
        },
      });
    }
  }, [triggerEvent]);

  const memoized = useMemo(
    () => [{ triggerEvent, gtag: triggerEvent }],
    [triggerEvent]
  );

  return <Analytics.Provider value={memoized}>{children}</Analytics.Provider>;
}

export function useAnalytics() {
  return useContext(Analytics);
}