export async function signup(formData: FormData) {}

export async function login(formData: FormData) {}

export async function logout() {
    // Логика выхода, например, удаление токена аутентификации
    await fetch('/api/logout', { method: 'POST', credentials: 'include' });
}
