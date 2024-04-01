type HttpMethods = 'GET' | 'POST' | 'DELETE';

interface APIOptions {
    method?: HttpMethods;
    body?: string;
    token?: string;
}

export const createAPI =
    <FormBody>(endpoint: string, options: APIOptions) =>
        async (body?: FormBody) => {
            const headers = {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            } as Record<string, string>;

            if (options.token) {
                headers['Authorization'] = `Bearer ${options.token}`;
            }

            const apiUrl = process.env.REACT_APP_API_ENDPOINT;
            return fetch(`${apiUrl}/${endpoint}`, {
                method: options.method ?? 'GET',
                headers,
                body: body ? JSON.stringify(body) : undefined,
            });
        };
