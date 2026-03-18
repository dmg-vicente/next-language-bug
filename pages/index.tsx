import useTranslation from 'next-translate/useTranslation'
import { LanguageSelector } from '@/components/LanguageSelector'

interface HomeProps {
  onLanguageChange?: (lang: string) => void
}

export default function Home({ onLanguageChange }: HomeProps) {
  const { t, lang } = useTranslation('common')
  return (
    <div className="h-svh flex flex-col items-center justify-center">
      <LanguageSelector onLanguageChange={onLanguageChange} />
      <strong className="mt-4 text-2xl">Current Language:</strong>{' '}
      {t('languageName')} ({lang})
    </div>
  )
}
