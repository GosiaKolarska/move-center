import React from "react";
import styles from "./FAQ.module.css";
import FAQItem from "./FAQItem";

function FAQ() {
  const faqData = [
    {
      question: "Jak wygląda pierwsza wizyta i jak długo trwa?",
      answer:
        "60 minut. To czas pierwszego spotkania. Na nim trener przeprowadzi wywiad i prosty test ruchowy. Ty będziesz czuć się komfortowo.",
    },
    {
      question: "Jak przygotować się na pierwszą wizytę? Co ze sobą zabrać?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget aliquet eros. Maecenas ut urna non risus sagittis fermentum. Sed commodo leo blandit ligula luctus, ut varius ligula finibus. Curabitur ornare dignissim tempor. Fusce hendrerit iaculis commodo. Ut quis blandit erat. Nunc venenatis laoreet ligula eget lacinia. Pellentesque ullamcorper diam vel nisl rhoncus ultricies id a orci. Etiam vel viverra ante. ",
    },
    {
      question: "Boję się, że będę skrępowania i że nie dam rady.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget aliquet eros. Maecenas ut urna non risus sagittis fermentum. Sed commodo leo blandit ligula luctus, ut varius ligula finibus. Curabitur ornare dignissim tempor. Fusce hendrerit iaculis commodo. Ut quis blandit erat. Nunc venenatis laoreet ligula eget lacinia. Pellentesque ullamcorper diam vel nisl rhoncus ultricies id a orci. Etiam vel viverra ante. ",
    },
    {
      question:
        "Czy uda mi się zrzucić wagę lub przybrać masę dzięki treningom personalnym?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget aliquet eros. Maecenas ut urna non risus sagittis fermentum. Sed commodo leo blandit ligula luctus, ut varius ligula finibus. Curabitur ornare dignissim tempor. Fusce hendrerit iaculis commodo. Ut quis blandit erat. Nunc venenatis laoreet ligula eget lacinia. Pellentesque ullamcorper diam vel nisl rhoncus ultricies id a orci. Etiam vel viverra ante. ",
    },
    {
      question: "Jak umówić się na pierwszą wizytę?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget aliquet eros. Maecenas ut urna non risus sagittis fermentum. Sed commodo leo blandit ligula luctus, ut varius ligula finibus. Curabitur ornare dignissim tempor. Fusce hendrerit iaculis commodo. Ut quis blandit erat. Nunc venenatis laoreet ligula eget lacinia. Pellentesque ullamcorper diam vel nisl rhoncus ultricies id a orci. Etiam vel viverra ante. ",
    },
    {
      question: "Czy studio jest przyjazne dla zwierząt?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget aliquet eros. Maecenas ut urna non risus sagittis fermentum. Sed commodo leo blandit ligula luctus, ut varius ligula finibus. Curabitur ornare dignissim tempor. Fusce hendrerit iaculis commodo. Ut quis blandit erat. Nunc venenatis laoreet ligula eget lacinia. Pellentesque ullamcorper diam vel nisl rhoncus ultricies id a orci. Etiam vel viverra ante. ",
    },
    {
      question: "Czy można płacić kartą?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget aliquet eros. Maecenas ut urna non risus sagittis fermentum. Sed commodo leo blandit ligula luctus, ut varius ligula finibus. Curabitur ornare dignissim tempor. Fusce hendrerit iaculis commodo. Ut quis blandit erat. Nunc venenatis laoreet ligula eget lacinia. Pellentesque ullamcorper diam vel nisl rhoncus ultricies id a orci. Etiam vel viverra ante. ",
    },
  ];

  return (
    <section className={styles.faq}>
      <div className="container">
        <span className={styles.subtitle}>FAQ</span>
        <h2 className={styles.title}>O co najczęściej pytacie?</h2>
        <div className={styles.faqContainer}>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
