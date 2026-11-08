
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const questions = [
  {
    question: 'What is BookYourStay?',
    answer:
      'BookYourStay is an accommodation discovery platform concept that helps visitors explore different types of places to stay across Pakistan.'
  },
  {
    question: 'Which cities are covered?',
    answer:
      'The website highlights popular destinations including Lahore, Islamabad and Karachi. More locations can be added as the directory grows.'
  },
  {
    question: 'What types of accommodation can I explore?',
    answer:
      'You can explore categories such as hotels, guest houses, private apartments, budget rooms, serviced apartments and resorts.'
  },
  {
    question: 'How can I find accommodation in my area?',
    answer:
      'Visit the Directory section and explore the listed cities and neighbourhoods to discover accommodation options.'
  },
  {
    question: 'Are the prices shown on the website confirmed?',
    answer:
      'The prices in this university project are illustrative examples only. Please confirm actual rates and availability directly with the accommodation provider.'
  },
  {
    question: 'Does every property provide the same facilities?',
    answer:
      'No. Facilities vary from one property to another. Always check the individual property details before making a decision.'
  },
  {
    question: 'Can I explore accommodation on my mobile?',
    answer:
      'Yes. The website layout is designed to adapt to mobile phones, tablets and desktop screens.'
  },
  {
    question: 'How can I contact the website team?',
    answer:
      'You can visit the Contact section at the bottom of the website to find the available contact information.'
  }
]

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq-section section-padding" id="faq">
      <div className="container">

        <div className="faq-heading">
          <span className="section-tag">HAVE QUESTIONS?</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Find answers to common questions about exploring
            accommodation through BookYourStay.
          </p>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = activeIndex === index

            return (
              <div
                className={`faq-item ${isOpen ? 'faq-active' : ''}`}
                key={index}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <span>
                    <span className="faq-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    {item.question}
                  </span>

                  <span className="faq-toggle">
                    {isOpen ? <Minus size={19} /> : <Plus size={19} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default FAQ
