import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '923215843804'

export default function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hi Haider, I found your portfolio and I would like to discuss a project.'
  )}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-110 animate-bounce"
    >
      <FaWhatsapp />
    </a>
  )
}
