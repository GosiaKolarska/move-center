import React from "react";
import styles from "./FAQ.module.css";
import FAQItem from "./FAQItem";

function FAQ() {
  const faqData = [
    {
      question: "Jak wygląda pierwsza wizyta i jak długo trwa?",
      answer:
        "<strong>60 minut.</strong> To czas pierwszego spotkania. Na nim trener przeprowadzi <strong>wywiad</strong> i prosty test ruchowy. Ty będziesz czuć się komfortowo.",
    },
    {
      question: "Ile kosztuje pierwsza konsultacja?",
      answer:
        "Pierwsza konsultacja jest <strong>darmowa</strong>. Po niej nie masz <strong>żadnych</strong> zobowiązań. To Ty zdecydujesz, czy chcesz trenować, czy nie.",
    },
    {
      question: "Jak przygotować się na pierwszą wizytę? Co ze sobą zabrać?",
      answer:
        "Weź wygodny <strong>strój</strong> i <strong>buty sportowe</strong>. Jeśli masz <strong>wyniki badań</strong>, weź je ze sobą (jak nie to też ok).",
    },
    {
      question: "Boję się, że będę skrępowania i że nie dam rady.",
      answer:
        "To normalna reakcja przed nowością. Każdy tak ma za pierwszym razem.<br>Musisz wiedzieć, że nasze studio jest <strong>kameralne</strong>. To znaczy trenujesz <strong>bez tłoku</strong>. Ćwiczenia <strong>dopasowane są do Ciebie</strong>. W żadnym momencie nie poczujesz, że nie dasz rady. Po to jest trener, by z ćwiczeń zrobić dla Ciebie przyjemność.<br>Pamiętaj o celu. Łatwiej jest go osiągnąć z trenerem.<br><strong>Przyjdź, spróbuj za darmo</strong>, jak Ci się nie spodoba nie wrócisz.<br>Ale… jeśli Ci się spodoba to naprawdę poczujesz się lepiej. Trening zmieni jakość Twojego życia, wygląd, samopoczucie.",
    },
    {
      question:
        "Czy uda mi się zrzucić wagę lub przybrać masę dzięki treningom personalnym?",
      answer:
        "Tak. <strong>Trener dobierze dla Ciebie dietę i trening</strong>. Zdziwisz się, jak szybko osiągniesz cel.",
    },
    {
      question: "Jak umówić się na pierwszą wizytę?",
      answer:
        "Wypełnij <strong>formularz</strong> na tej stronie lub zadzwoń: +48 889 767 835",
    },
    {
      question: "Czy trening jest odpowiedni dla osób starszych?",
      answer:
        "<strong>Tak.</strong> Trener dobierze odpowiednie natężenie ćwiczeń.",
    },
    {
      question: "Czy oferujecie porady żywieniowe?",
      answer:
        "<strong>Tak.</strong> Otrzymasz <strong>profesjonalny plan żywieniowy</strong>.<br>Jeśli chcesz schudnąć, to połączenie diety i treningu znacznie przyśpieszy ten efekt!",
    },
    {
      question: "Czy studio jest przyjazne dla zwierząt?",
      answer: "No jasne! Bierz 🐕🐕‍🦺",
    },
    {
      question: "Czy można płacić kartą?",
      answer: "Tak, przyjmujemy płatność kartą i gotówką.",
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
