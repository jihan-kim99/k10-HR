import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../constants';

const RootRedirect = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // Get language from i18n (which uses browser detector)
    let detectedLang = i18n.language;

    // Check if detectedLang matches any supported language code
    if (detectedLang) {
       const matchedLang = SUPPORTED_LANGUAGES.find(lang => detectedLang.startsWith(lang));
       detectedLang = matchedLang || DEFAULT_LANGUAGE;
    } else {
       detectedLang = DEFAULT_LANGUAGE;
    }

    navigate(`/${detectedLang}`, { replace: true });
  }, [i18n, navigate]);

  return null;
};

export default RootRedirect;
