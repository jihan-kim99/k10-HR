import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, SITE_URL } from '../constants';

const SEO = ({ title, description }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const currentLang = i18n.language;

  // Function to get path for a specific language
  const getPathForLang = (lang) => {
    const currentPath = location.pathname;
    // Remove existing language prefix if present
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '');
    // Ensure we don't end up with double slashes if pathWithoutLang is empty or /
    const cleanPath = pathWithoutLang === '/' || pathWithoutLang === '' ? '' : pathWithoutLang;
    return `/${lang}${cleanPath}`;
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <Helmet>
        <html lang={currentLang} />

        {SUPPORTED_LANGUAGES.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hreflang={lang}
          href={`${SITE_URL}${getPathForLang(lang)}`}
        />
      ))}
      <link
        rel="alternate"
        hreflang="x-default"
        href={`${SITE_URL}${getPathForLang('en')}`}
      />
      </Helmet>
    </>
  );
};

export default SEO;
