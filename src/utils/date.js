export const formatDate = (dateEta) => {
    const d = new Date(dateEta * 1000);
    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
    const month = d.getMonth() < 9 ? `0${d.getMonth() + 1}` : d.getMonth() + 1;
    return `${day}/${month}/${d.getFullYear()}`
}