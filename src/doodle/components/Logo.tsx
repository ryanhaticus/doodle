import Image from 'next/image';

interface ILogoProps {
  href?: string;
  className?: string;
}

const Logo = ({ href, className }: ILogoProps) => {
  return (
    <a href={href ?? '/'}>
      <span className='sr-only'>
        {process.env.NEXT_PUBLIC_DOODLE_LOGO_SITE_TITLE}
      </span>
      <div className={className}>
        <Image
          src={process.env.NEXT_PUBLIC_DOODLE_LOGO_PATH}
          alt={process.env.NEXT_PUBLIC_DOODLE_LOGO_ALT_TEXT}
          width={process.env.NEXT_PUBLIC_DOODLE_LOGO_WIDTH}
          height={process.env.NEXT_PUBLIC_DOODLE_LOGO_HEIGHT}
        />
      </div>
    </a>
  );
};

export default Logo;
