import Link from 'next/link';

// Base64 encoded logo
const logoSrc = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDw8QEA8QDw8PDg8ODw8QEBAQEA8PFREWFhYVFhMYHSggGBolGxMVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFysfFR0rLS0rLSstLSstLSstKy0tKy0rLSstLS0tLS0tLS0tKy0rLS0rLS0tLS0tLS0tLSstLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBAUGB//EADcQAAIBAgQDBgQEBgMAAAAAAAABAgMRBCExBRJBUWEGEyJxgZGhFDKxwdFS4fAVIyQzU/FicoL/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAjEQEBAQEAAgICAgMBAAAAAAAAAQIREiExA0FRBBMiMmFC/9v/AASg4JptJNNOzT1TXYpAEYKMd5PzZpTjH3m/RfcC6V01Zq6fR9CnKCksrSfcD42e2j9yS/UqjSjH4Vfv3fmwLpFSSyuz7EciWo0ozVpK/fqvJlU6MI/CkvN7v5sD4LNWvayu/IvRoSm7RXq9kvNhSpxmkmrpaLo/NDhCMVZJRW6S0AxhSjBWWret236spAAUAAAAAAAAAAAAAAAAAAAAAAAAAEACIyazK6fVPQqdKE/iS89n80VqjKLvF3XR/ozOpxbV0mntbVAfKpSlHWSa8zSnTlP4Vfv2XzY5Qoylu0uz1f4L4Uow+GNvXu/NgMI0Yx11l3f4LAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAIAUAigAQAogKAAAEACIyUldOzXRqzKdKlN3lFN9dpea0YpZmnunqt9iL0JxeZNrrfR+qAwlh4PZteln+BRLDuPtRe/Xf1Zq4prZp+aFODvlejd0ugHNk4yV07NdU7MpRgpNtKzaTdt7LQZzoRlrs+8Xb+hq/Qmt4prvb9GQcknZ2vZ3V97Pcu4UJTdopv8F5sVTDKXxxS7x1/I0hRhDSOr7vX8AcYUYQ1jr3er+y/JYAFAAAAAAAAAAAAAAAAAAAAAAAAAABAUAIAUAAAEACAFABABQAgBQAAAAAAAAAAAEUAKAAAAAAAoCAFAAAAAAAAAAAAAAAUABCgADpYDB4at/kl/tk0MLWf+GXzS/mjeAcpYXErdw+bf8AIrlgK6+zL1Tj+jOgA5csJXWzpyXk0yqOHqSlaMZN9kmzpagHKjgKy+KP1kl+rNI4LEx+xJf4ZNe7Z0ABzlhK63pyfk0yrg6v8AkS/2s6YgDkzwtaHtxkvNafeUexq2zcsl73wu/e+h1zGFWE9pRb6X1Xk+gHLjTqTlaKlKT2SV2XwwleW6a82l+rNI4amviTl5WX4ZasLSTvlfzbf5gccMDf/ABJLyjH/AFMyhgKS+JSn5uS/KNsA5scHSj9WLfdty/NjSNOEdopLySQqAIoAAAAAAAAAAAAAAAAAAAAAIACgAAAAIACgAABAoAIAAUEUAAFABQAAAAAAAQAUAEAUAAAAAAAAAAAAAAABAoAigAAAACgAgBQAAAAAAUEAKACAAAAAAAAAAAAAAAAAAAAAAAAAAAAigAAAoAIAUAAAAAAAAAABQAgBQAAAAAAAAAAEAUAAARQAAUAEAFAAAABAUAEAKAAAAAAAAAAigAP/2Q==";

export default function Footer() {
  return (
    <footer className="bg-white-a05 border-t border-white-a10">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <img src={logoSrc} alt="Recuperaciones Jurídicas Logo" width={24} height={24} className="rounded-sm" />
            <span className="font-bold text-lg font-headline">Recuperaciones Jurídicas</span>
          </div>
          <p className="text-sm text-foreground/60">&copy; {new Date().getFullYear()} Recuperaciones Jurídicas. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Política de Privacidad</Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-foreground">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
