import Image from 'next/image';
import React from 'react'

const LocaleIcon = ({ locale }: { locale: string }) => (
    <div className='w-7 h-7 rounded-full overflow-hidden'>
        <Image src={`/flags/${locale}.webp`} className='w-full h-full object-cover' width={500} height={500} alt={locale} />
    </div>
);

export default LocaleIcon
