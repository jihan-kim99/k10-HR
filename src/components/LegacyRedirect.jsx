import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../constants';

const LegacyRedirect = ({ path }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    let detectedLang = i18n.language;

    if (detectedLang) {
       const matchedLang = SUPPORTED_LANGUAGES.find(lang => detectedLang.startsWith(lang));
       detectedLang = matchedLang || DEFAULT_LANGUAGE;
    } else {
       detectedLang = DEFAULT_LANGUAGE;
    }

    // Ensure path starts with /
    const targetPath = path.startsWith('/') ? path : `/${path}`;

    navigate(`/${detectedLang}${targetPath}`, { replace: true });
  }, [i18n, navigate, path]);

  return null;
};

export default LegacyRedirect;
