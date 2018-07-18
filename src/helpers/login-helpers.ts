let logged: boolean | undefined;

export function isLoggedIn(): boolean | undefined {
  if (logged === undefined) {
    logged = !!window.localStorage.getItem('token');
  }
  return logged;
}

export async function loginHelpers(token: string): Promise<void> {
  await window.localStorage.setItem('token', token);
  logged = true;
}

export function logout(): void {
  window.localStorage.removeItem('token');
  logged = false;
}