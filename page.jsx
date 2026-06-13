'use client';

import { useState } from 'react';
import TabNav from '@/components/TabNav';
import QaidaPractice from '@/components/QaidaPractice';
import SurahRecitation from '@/components/SurahRecitation';

export default function Home() {
  const [tab, setTab] = useState('qaida');

  return (
    <div className="mx-auto max-w-5xl px-4 pt-8 sm:pt-12">
      <header className="mb-8 text-center">
        <p className="font-arabic text-2xl text-gold-dark" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <h1 className="mt-2 text-3xl font-bold text-mint-900 sm:text-4xl">
          Quran Tajweed &amp; Recitation Checker
        </h1>
        <p className="mt-2 text-sm text-mint-700 sm:text-base">
          Master your Makharij and Tajweed with instant, gentle feedback
        </p>
        <div className="mx-auto mt-4 h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-gold to-transparent" />
      </header>

      <TabNav active={tab} onChange={setTab} />

      <div className="mt-8">
        {tab === 'qaida' ? <QaidaPractice /> : <SurahRecitation />}
      </div>
    </div>
  );
}
