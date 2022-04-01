import Image from 'react-bootstrap/Image';


export function FooterLogo({ src, alt }) {
  return (
    <div>
      <Image src={src} alt={alt} width="117" height="28" />
    </div>
  );
}
