'use client'
import { useState } from 'react'
import HomeEnglish from './HomeEnglish'
import HomeHindi from './HomeHindi'

export default function LanguageToggle() {
  const [language, setLanguage] = useState('en')

  return (
    <>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          className="px-6 py-2 bg-white/30 backdrop-blur-md border border-white/40 rounded-xl shadow
          font-medium text-green-900 hover:bg-white/40 transition"
        >
          {language === 'en' ? 'हिंदी में देखें' : 'Switch to English'}
        </button>
      </div>

      {language === 'en' ? <HomeEnglish /> : <HomeHindi />}
    </>
  )
}
