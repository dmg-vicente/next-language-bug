import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import I18nProvider from 'next-translate/I18nProvider'
import DynamicNamespaces from 'next-translate/DynamicNamespaces'
import { useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState('en')

  return (
    <I18nProvider key={lang} lang={lang}>
      <DynamicNamespaces namespaces={['common']}>
        <Component {...pageProps} onLanguageChange={setLang} />
      </DynamicNamespaces>
    </I18nProvider>
  )
}
