import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='absolute hidden text-sm text-center text-gray-400 md:block bottom-7'>
      <p>
        CodeSnap is coming soon. <br /> Created by{' '}
        <span>
          <Link
            className='text-white underline transition opacity-90 hover:opacity-100'
            href='https://bento.me/jparw'
            target={'_blank'}
          >
            @jparw
          </Link>
        </span>{' '}
        to give you back your time.
      </p>
    </footer>
  )
}
