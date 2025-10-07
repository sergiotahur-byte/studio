'use client';

const WhatsAppButton = () => {
  const phoneNumber = '+573182806162';
  const message = 'Hola, necesito asesoría sobre un contrato de arrendamiento.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M16.6 14.2c-.3-.2-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1-.2.2-.5.7-.6.8-.1.1-.2.2-.4.1-.2-.1-.9-.3-1.6-1-.6-.5-1-1.1-1.1-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3s.2-.2.3-.4c.1-.1.1-.2 0-.3-.1-.1-.5-1.3-.7-1.7-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.4.1-.5.3s-.6.6-.6 1.4c0 .8.6 1.6.7 1.7.1.1 1.2 1.8 2.9 2.6.4.2.7.3.9.4.5.2 1 .1 1.3-.1.4-.2.9-.6 1.1-.9.2-.2.2-.4.1-.5l-.2-.2zM12 2a10 10 0 100 20 10 10 0 000-20zm0 18.4c-4.6 0-8.4-3.8-8.4-8.4s3.8-8.4 8.4-8.4 8.4 3.8 8.4 8.4-3.8 8.4-8.4 8.4z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
