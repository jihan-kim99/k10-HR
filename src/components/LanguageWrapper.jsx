import React, { useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../constants';

const LanguageWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
      // Invalid language, redirect to default
      navigate(`/${DEFAULT_LANGUAGE}`, { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate]);

  if (!SUPPORTED_LANGUAGES.includes(lang)) return null;

  return <Outlet />;
};

export default LanguageWrapper;
