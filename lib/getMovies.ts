import {SearchResults} from "@/typings";

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
     : {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  return (await response.json()) as SearchResults;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL(`https://api.themoviedb.org/3/discover/movie`);

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getSearchMovies(term: string)  {
  const url = new URL(`https://api.themoviedb.org/3/search/movie`);
  url.searchParams.set("query", term);

  const data = await fetchFromTMDB(url);
  return data.results;
}


// export const api = async (param: string, params2: string, method: string, data?: any): Promise<any> => {
//   const url = Domain + param + params2;
//   let content = '';
//   let json = true;
//   let addtlHeaders = {};
//   if (data instanceof FormData) {
//     content = 'multipart/form-data';
//     json = false;
//   } else {
//     content = 'application/json;charset=UTF-8';
//     json = true;
//   }

//   if (params2.includes('inviterGame/rewardLogs')) {
//     const rewardLogsType = params2.split('?')[1].substring(5);
//     addtlHeaders = { type: rewardLogsType };
//     params2 = 'inviterGame/rewardLogs';
//   }
//   try {
//     const globalHeaders = {
//       'front-host': url,
//       dev: dev_version,
//       version: process.env.APP_VERSION,
//       'Content-Type': content,
//     };
//     const axiosConfig: AxiosRequestConfig = {
//       method: method,
//       url: url,
//       headers: {
//         'front-host': globalHeaders['front-host'],
//         dev: globalHeaders.dev.toString(),
//         version: globalHeaders.version?.toString() ?? 2,
//         'Content-Type': globalHeaders['Content-Type'],
//         token: userToken || localStorage.getItem('token'),
//         otp: userOtp || localStorage.getItem('otp'),
//         agent: Agent,
//         'Accept-Language': !!acceptLang?.length ? acceptLang : localStorage.getItem('lang'),
//         ...addtlHeaders,
//       },
//       data: json === true ? JSON.stringify(data) : data,
//       // withCredentials: true,
//     };

//     const response: AxiosResponse = await axiosInstance(axiosConfig);
//     if (response.status !== 200) {
//       throw new Error('Request failed');
//     }
//     const loginMethods = ['login', 'loginEmail', 'email/register', 'mobile/login', 'loginDevice', 'continueWithOtp'];
//     if (loginMethods.includes(params2)) {
//       if (response.data.code === 200) {
//         var resToken = response.data.data.token;
//         var resUserId = response.data.data.id;
//         storeToken(resToken);
//         setCookie(resUserId, resToken, 30);
//         localStorage.setItem('token', resToken);
//         sessionStorage.removeItem('Modal');
//         storeToken(response.data.data.token);
//       } else {
//         return response;
//       }
//       return response;
//     } else if (response.data.code === 401) {
//       if (
//         !(
//           window.location.pathname.includes('pinduoduo') ||
//           window.location.pathname.includes('recharge-bonus') ||
//           window.location.pathname.includes('roulette')
//         )
//       ) {
//         localStorage.removeItem('token');
//         userToken = '';
//         window.location.href = '/?code=401';
//       }
//       return response;
//     } else {
//       return response;
//     }
//   } catch (error) {
//     return null;
//   }
// };


// export const continueWithOtp = (data: TContinueWithOtp) => api(platform, 'continueWithOtp', REQUEST_METHOD.POST, data);
