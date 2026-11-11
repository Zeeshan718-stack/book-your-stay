
import { MessageCircle } from 'lucide-react'

const whatsappNumbers = [
  '923001234567',
]

function WhatsAppButton() {
  const message = 'Assalam o Alaikum! I want to know about accommodation.'

  return (
    <div className="whatsapp-buttons">
      {whatsappNumbers.map((number) => (
        <a
          key={number}
          href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label={`Chat on WhatsApp ${number}`}
        >
          <MessageCircle size={27} />
        </a>
      ))}
    </div>
  )
}

export default WhatsAppButton
