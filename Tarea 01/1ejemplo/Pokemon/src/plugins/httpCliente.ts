export const httpClient = {
    get: async <T>(url: string): Promise<T> => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json() as T;
      return data;
    },
    post: async (url: string, body: string) => {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      return data;
    },
    put: async (url: string, body: string) => {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      return data;
    },
    delete: async (url: string) => {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      const data = await response.json();
      return data;
    },
  };