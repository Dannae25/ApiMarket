// Usa la URL pública de TU servicio en Railway, sin "/" al final
const BASE_URL = 'https://TU-URL.up.railway.app';

export async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const respuesta = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    },
  });

  const data = await respuesta.json().catch(() => null);

  if (!respuesta.ok) {
    throw new Error(data?.message ?? `Error ${respuesta.status}`);
  }
  return data as T;
}