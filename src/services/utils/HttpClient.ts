class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`);

    if (response.status && response.status > 399) {
      throw new Error(`${response.status} (${response.statusText})`);
    }

    return response.json();
  }
}

export default HttpClient;
