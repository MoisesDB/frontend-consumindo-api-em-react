const API_KEY = "5d4c50ae3bdb48bafade01db71a1065b";
const API_BASE = "https://api.themoviedb.org/3";

const doFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: async () => {
    return [
      {
        slug: "trending",
        title: "Populares da Semana",
        items: await doFetch(
          `/trending/movie/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getResult: async (searchedValue) => {
    return [
      {
        slug: "searched",
        title: `Resultado da pesquisa: ${searchedValue}`,
        items: await doFetch(
          `/search/movie/?api_key=${API_KEY}&language=pt-BR&query=${searchedValue}`
        ),
      },
    ];
  },

  getInfo: async (movieId) => {
    return [
      {
        slug: "movieTarget",
        items: await doFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
