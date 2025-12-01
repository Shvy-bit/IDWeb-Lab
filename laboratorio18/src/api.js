const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
export function cargarUsuarioPromesa(userId) {
    const url = `${BASE_URL}/${userId}`;
       return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        });
}
export async function cargarUsuarioAsyncAwait(userId) {
    const url = `${BASE_URL}/${userId}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
}
export function listarNombresPromesa() {
    return fetch(BASE_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        });
}
export async function listarNombresAsyncAwait() {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
}
export function updateDOMDisplay(user, displayAlert) {
    document.getElementById('user-name').textContent = `Nombre: ${user.name}`;
    document.getElementById('user-email').textContent = `Email: ${user.email}`;
    document.getElementById('user-city').textContent = `Ciudad: ${user.address.city}`;
    
    displayAlert(`EJ 7/8: DOM Actualizado`, `Los datos del usuario ${user.id} han sido cargados exitosamente en la sección superior.`);
}
export function clearDOMDisplay() {
    document.getElementById('user-name').textContent = `Nombre: -`;
    document.getElementById('user-email').textContent = `Email: -`;
    document.getElementById('user-city').textContent = `Ciudad: -`;
}