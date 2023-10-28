
/**
 * Formata uma data EPOCH (em segundos) para uma string no formato 'DD/MM/AAAA'.
 *
 * @param {number} dateEta - A data EPOCH em segundos que deseja formatar.
 * @returns {string} A data formatada no formato 'DD/MM/AAAA'.
 *
 * @example
 * // Retorna '01/01/2023'
 * formatDate(1672531200);
 *
 * @example
 * // Retorna '15/11/2022'
 * formatDate(1679126400);
 */
export const formatDate = (dateEta) => {
    const d = new Date(dateEta * 1000);
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    return `${day}/${month}/${d.getFullYear()}`
}