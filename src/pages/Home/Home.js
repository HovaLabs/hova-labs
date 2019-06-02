import React from 'react';
import { useTranslation } from 'react-i18next';
import { AbsoluteFlex } from 'styled-system-flex-box';

export function Home() {
  const { t } = useTranslation();

  return <AbsoluteFlex bg="primary">{t('pages.home.title')}</AbsoluteFlex>;
}
