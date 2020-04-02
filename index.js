import pt_BR from "date-fns/locale/pt-BR";
import { utcToZonedTime } from "date-fns-tz";

const formatDateTimeZone = date => {
  const parsedDate = utcToZonedTime(parseISO(`${date}Z`), "America/Fortaleza");
  return format(parsedDate, "dd/MM/yyyy HH:mm:ss");
};

const formatDateTimeZoneWithPreposition = date => {
  if (date) {
    const parsedDate = utcToZonedTime(
      parseISO(`${date}Z`),
      "America/Fortaleza"
    );
    return format(parsedDate, "dd 'de' MMMM 'de' yyyy HH:mm:ss", {
      locale: pt_BR
    });
  }
  return date;
};

const nameThreePoints = (nome, length) => {
  if (nome.length > 14) {
    const nomeformatado = nome.substring(0, length) + "...";
    return nomeformatado;
  }
  return nome;
};

const containsSpecialChar = value => {
  const pattern = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9_-]{1,}$/;
  return !pattern.test(value);
};

const formatPhoneNumber = str => {
  const cleaned = ("" + str).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{5})$/);

  if (!match) return;

  return `(${match[1]}) ${match[2]}-${match[3]}`;
};

const formatCurrecy = value =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export {
  formatDateTimeZone,
  formatDateTimeZoneWithPreposition,
  nameThreePoints,
  containsSpecialChar,
  formatPhoneNumber,
  formatCurrecy
};
