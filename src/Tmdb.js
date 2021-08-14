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
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
