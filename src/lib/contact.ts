// Ajuste o número (DDI + DDD + número) e o Instagram quando tiver os dados finais.
export const WHATSAPP_NUMBER = "5541999999999";

export const whatsappLink = (
  message = "Olá, Dra. Tatiane. Gostaria de falar sobre um caso e agendar um atendimento.",
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const INSTAGRAM_URL = "https://instagram.com/";
