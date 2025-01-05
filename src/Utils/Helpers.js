export const formatPrice = (price) => `Q${price.toLocaleString('es-GT', { minimumFractionDigits: 2 })}`;
export const formatTime = (time) => `${time} horas`;
