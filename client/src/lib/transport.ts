import i18next from "./i18next";

export interface RequestParams {
  method?: string;
  body?: any;
  headers?: {
    [key: string]: any;
  };
  url: string;
}

export async function transport(params: RequestParams): Promise<Response> {
  const options: RequestInit = {
    method: params.method || "GET",
  };

  if (params.body) {
    options.body = params.body;
  }

  if (params.headers) {
    options.headers = params.headers;
  }

  if (params.headers) {
    options.headers = params.headers;
  }

  let response: Response;
  try {
    response = await fetch(params.url, options);
  } catch (error) {
    throw new Error(i18next.t("errors:network"));
  }

  if (!response.ok) {
    let error;
    try {
      error = await response.json();
      if (error?.cod === "404") {
        error.message = i18next.t("errors:place-not-found");
      }
    } catch (innerError) {
      throw new Error(i18next.t("errors:network"));
    }
    throw error;
  }

  if (response.status !== 204) {
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error(i18next.t("errors:network"));
    }
  }

  return response;
}
