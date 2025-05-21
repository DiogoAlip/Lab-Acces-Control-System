export const getLanguage = async (text: string) => {
  const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=es|en`;
  const res = await fetch(url);
  const data = await res.json();
  return data.responseData.translatedText;
};

export const getLanguageDictionary = async (SpanishWords: {
  [details: string]: string;
}) => {
  const English = Object.values(SpanishWords).map(async (value) => {
    const word = await getLanguage(value)
      .catch((e) => e)
      .then((value) => value);
    return word;
  });
  return Object.values(English);
};
