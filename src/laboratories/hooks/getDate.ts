export const getDataDate = () => {
  const idioma = "es-ES";
  const fecha = new Date();
  const mes = fecha
    .toLocaleString(idioma, {
      month: "long",
    })
    .toUpperCase();
  const semana = fecha.toLocaleString(idioma, { weekday: "long" });

  return { mes, semana };
};
