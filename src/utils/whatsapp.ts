export const WHATSAPP_NUMBER = "5511936197888";
export const WHATSAPP_MESSAGE = "Olá, gostaria de realizar a Avaliação de Segurança e Conformidade Técnica do meu sistema fotovoltaico conforme a NBR 17.193. Tenho interesse na sessão estratégica gratuita.";

export const getWhatsAppUrl = () => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
};
