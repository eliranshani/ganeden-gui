export function isLoggedIn(): string | null {
  return window.localStorage.getItem('token');
}

export async function login(token: string): Promise<void> {
  await window.localStorage.setItem('token', token);
}

export function logout(): void {
  window.localStorage.removeItem('token');
}