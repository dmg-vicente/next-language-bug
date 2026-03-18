import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import styles from '@/styles/LanguageSelector.module.css'

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'pt', name: 'Português' },
]

interface LanguageSelectorProps {
  onLanguageChange?: (lang: string) => void
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onLanguageChange,
}) => {
  const { t, lang } = useTranslation('common')

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value
    if (onLanguageChange) {
      onLanguageChange(newLang)
    }
  }

  return (
    <div className={styles.selectorContainer}>
      <label htmlFor="language-select" className={styles.label}>
        {t('selectLabel')}
      </label>
      <select
        id="language-select"
        value={lang}
        onChange={handleLanguageChange}
        className={styles.select}
      >
        {LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.name}
          </option>
        ))}
      </select>
    </div>
  )
}
