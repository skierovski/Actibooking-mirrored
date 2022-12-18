import Footer from "../Footer/Footer";
import Accordion from "../DefaultModels/Accordion/Accordion";
import Navibar from "../Navibar/Navibar";
import SectionTitle from "../DefaultModels/Titles/SectionTitle";

import styles from "./FAQPage.module.css";

const FAQPage = () => {
  const FaqData = [
    {
      title: "1.Co to jest Actibooking?",
      content: `Actibooking to platforma do rezerwacji kursów i zajęć sportowych. Umożliwia ona użytkownikom znalezienie i zarezerwowanie miejsc na różnego rodzaju aktywności fizyczne, takie jak joga, pilates, zumba, tenis, nordic walking itp.
      `,
    },
    {
      title:
        "2.Jak mogę zarezerwować miejsce na zajęcia za pomocą Actibooking?",
      content: `Aby zarezerwować miejsce na zajęcia za pomocą Actibooking, należy:
      Zarejestrować się na stronie internetowej actibooking.com lub zalogować się na istniejące konto
      Wyszukać interesujące nas zajęcia w wybranej lokalizacji i dacie
      Wybrać odpowiednią opcję rezerwacji (np. pojedyncze zajęcia, karnet, abonament itp.)
      Zakończyć proces rezerwacji, wybierając opcję płatności i potwierdzając rezerwację
      `,
    },
    {
      title:
        "3.Czy mogę anulować zarezerwowane zajęcia lub zmienić datę ich odbycia?",
      content: `Tak, możliwe jest anulowanie zarezerwowanych zajęć lub ich przeniesienie na inny termin. W tym celu należy skontaktować się z obsługą klienta Actibooking i przedstawić swoje żądanie. Zasady anulowania lub zmiany terminu zajęć mogą się różnić w zależności od rodzaju rezerwacji i warunków umowy z dostawcą usługi.`,
    },
    {
      title: "4.Czy na zajęcia z Actibooking mogę zabrać osobę towarzyszącą?",
      content: `To zależy od konkretnych zasad obowiązujących na danych zajęciach. Niektóre zajęcia są przeznaczone tylko dla jednej osoby, podczas gdy inne mogą być udostępnione również dla osób towarzyszących`,
    },
    {
      title:
        "5.Czy muszę mieć swoje własne sprzęty sportowe, żeby brać udział w zajęciach z Actibooking?",
      content: `Niekoniecznie. Wiele zajęć oferowanych przez Actibooking zapewnia dostęp do niezbędnych sprzętów sportowych. W przypadku niektórych aktywności, takich jak tenis czy koszykówka, może być wymagane własne wyposażenie. W takim przypadku należy zapoznać się z informacjami podanymi w opisie zajęć lub skontaktować się z obsługą klienta Actibooking.`,
    },
    {
      title: "6.Czy na zajęcia z Actibooking mogę zabrać dziecko?",
      content: `Zależy to od rodzaju zajęć i wieku dziecka. W przypadku niektórych aktywności, takich jak joga czy pilates, dzieci mogą brać udział w zajęciach, ale muszą być pod opieką dorosłych. Inne zajęcia mogą być przeznaczone tylko dla dorosłych lub posiadać ograniczenia wiekowe. W takim przypadku należy zapoznać się z informacjami podanymi w opisie zajęć lub skontaktować się z obsługą klienta Actibooking.`,
    },
    {
      title:
        "7.Czy w ramach Actibooking oferowane są również zajęcia z trenerem personalnym?",
      content: `Tak, Actibooking oferuje również możliwość rezerwacji indywidualnych treningów z trenerem personalnym. W takim przypadku należy wyszukać interesujące nas zajęcia w kategorii "trener personalny" i dokonać rezerwacji według standardowych procedur.`,
    },
    {
      title: "8. Czy na zajęcia z Actibooking mogę zabrać swojego psa?",
      content: `Nie, zajęcia z Actibooking są przeznaczone tylko dla ludzi i nie są dopuszczalne inne zwierzęta.`,
    },
    {
      title:
        "9. Czy w ramach Actibooking oferowane są również zajęcia grupowe?",
      content: `Tak, Actibooking oferuje szeroką gamę zajęć grupowych, takich jak joga, pilates, zumba, spinning itp. Można je znaleźć w kategorii "grupowe zajęcia" lub "fitness" i dokonać rezerwacji według standardowych procedur.`,
    },
    {
      title: "10. Czy na zajęcia z Actibooking muszę być w pełni zdrowy?",
      content: `Tak, aby brać udział w zajęciach z Actibooking, należy być w pełni zdrowym i sprawnym fizycznie. W przypadku jakichkolwiek ograniczeń lub dolegliwości zdrowotnych należy skonsultować się z lekarzem i upewnić, że wybrana aktywność jest odpowiednia dla naszego stanu zdrowia.`,
    },
    {
      title:
        "11. Czy Actibooking oferuje również zajęcia dla osób niepełnosprawnych?",
      content: `Tak, Actibooking oferuje również zajęcia dostosowane do potrzeb osób niepełnosprawnych. W takim przypadku należy skontaktować się z obsługą klienta i przedstawić swoje potrzeby oraz ograniczenia. Actibooking dąży do tego, aby każdy mógł cieszyć się aktywnością fizyczną, niezależnie od swojego stanu zdrowia.`,
    },
    {
      title: "12. Czy Actibooking oferuje również zajęcia dla dzieci?",
      content: `Tak, Actibooking oferuje również zajęcia dla dzieci w różnym wieku i na różnym poziomie zaawansowania. Można je znaleźć w kategorii "dzieci" lub "szkółki sportowe" i dokonać rezerwacji według standardowych procedur.`,
    },
  ];

  return (
    <>
      <Navibar />

      <div className={styles.faq}>
        <SectionTitle value="Actibooking FAQ" />
        <div className={styles.Container}>
          {FaqData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQPage;
