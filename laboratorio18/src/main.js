import { sumar, restar, multiplicar, dividir } from './math/math_ops.js';
import {
    cargarUsuarioPromesa,
    cargarUsuarioAsyncAwait,
    listarNombresPromesa,
    listarNombresAsyncAwait,
    updateDOMDisplay,
    clearDOMDisplay
} from './api.js';
function displayAlert(title, content) {
    alert(`--- ${title} ---\n\n${content}`);
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('ej3').addEventListener('click', () => {
        const userId = 10;
        let output = '';
        cargarUsuarioPromesa(userId)
            .then(user => {
                output += `name: ${user.name}\n`;
                output += `username: ${user.username}\n`;
                output += `email: ${user.email}`;
                displayAlert(`EJ 3: Usuario ${userId} (Promesas)`, output);
            })
            .catch(error => {
                displayAlert(`EJ 3: Error`, `No se pudo cargar el usuario ${userId}.\nError: ${error.message}`);
            });
    });
    document.getElementById('ej4').addEventListener('click', async () => {
        const userId = 10;
        let output = '';
        try {
            const user = await cargarUsuarioAsyncAwait(userId);
            output += `name: ${user.name}\n`;
            output += `username: ${user.username}\n`;
            output += `email: ${user.email}`;
            displayAlert(`EJ 4: Usuario ${userId} (Async/Await)`, output);
        } catch (error) {
            displayAlert(`EJ 4: Error`, `No se pudo cargar el usuario ${userId}.\nError: ${error.message}`);
        }
    });
    document.getElementById('ej5').addEventListener('click', () => {
        let output = 'Nombres de Usuarios (forEach):\n';

        listarNombresPromesa()
            .then(users => {
                users.forEach((user, index) => {
                    output += `${index + 1}. ${user.name}\n`;
                });
                displayAlert(`EJ 5: Listar Nombres (Promesas)`, output);
            })
            .catch(error => {
                displayAlert(`EJ 5: Error`, `No se pudo listar los nombres.\nError: ${error.message}`);
            });
    });
    document.getElementById('ej6').addEventListener('click', async () => {
        let output = 'Nombres de Usuarios (forEach):\n';
        try {
            const users = await listarNombresAsyncAwait();
            users.forEach((user, index) => {
                output += `${index + 1}. ${user.name}\n`;
            });
            displayAlert(`EJ 6: Listar Nombres (Async/Await)`, output);
        } catch (error) {
            displayAlert(`EJ 6: Error`, `No se pudo listar los nombres.\nError: ${error.message}`);
        }
    });
    document.getElementById('ej7').addEventListener('click', () => {
        const userIdToDisplay = 2;
        clearDOMDisplay();
        cargarUsuarioPromesa(userIdToDisplay)
            .then(user => {
                updateDOMDisplay(user, displayAlert);
            })
            .catch(error => {
                displayAlert(`EJ 7: Error`, `No se pudo cargar el usuario ${userIdToDisplay}.\nError: ${error.message}`);
            });
    });
    document.getElementById('ej8').addEventListener('click', async () => {
        const userIdToDisplay = 2;
        clearDOMDisplay();
        try {
            const user = await cargarUsuarioAsyncAwait(userIdToDisplay);
            updateDOMDisplay(user, displayAlert);
        } catch (error) {
            displayAlert(`EJ 8: Error`, `No se pudo cargar el usuario ${userIdToDisplay}.\nError: ${error.message}`);
        }
    });
    document.getElementById('ej9').addEventListener('click', () => {
        const inputA = prompt("EJ 9: Ingrese el primer número (a):", "10");
        const inputB = prompt("EJ 9: Ingrese el segundo número (b):", "5");
        const a = parseFloat(inputA);
        const b = parseFloat(inputB);
        if (isNaN(a) || isNaN(b)) {
            displayAlert("EJ 9: Error de entrada", "Por favor, ingrese números válidos.");
            return;
        }
        let output = `Test de Módulos Matemáticos con a=${a} y b=${b}:\n`;
        const resSuma = sumar(a, b);
        const resResta = restar(a, b);
        const resMultiplicacion = multiplicar(a, b);
        output += `Suma (${a} + ${b}): ${resSuma}\n`;
        output += `Resta (${a} - ${b}): ${resResta}\n`;
        output += `Multiplicación (${a} * ${b}): ${resMultiplicacion}\n`;
        try {
            const resDivision = dividir(a, b);
            output += `División (${a} / ${b}): ${resDivision}\n`;
        } catch (e) {
            output += `Error en división (${a}/${b}): ${e.message}\n`;
        }
        try {
            dividir(a, c);
        } catch (e) {
            output += `Error en división: ${e.message}`; 
        }
        displayAlert(`EJ 9: Test Módulos Matemáticos`, output);
    });
    const regexExamples = {
        ej11: {
            title: "EJ 11: RegEx Contraseña Fuerte",
            rule: "Regla: Mínimo 8 chars, 1 mayús, 1 minús, 1 número.",
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            tests: [
                { input: "Pass123word", expected: true },
                { input: "pass123word", expected: false },
                { input: "Password", expected: false }, 
            ]
        },
        ej12: {
            title: "EJ 12: RegEx URL Seguras",
            rule: "Encontrar direcciones URL que empiecen con 'https://'.",
            regex: /https:\/\/[^\s]+/g,
            text: "Visita mi web segura: https://segura.com, o quizás http://insegura.com, pero la mejor es https://otrasegura.net.",
            operation: 'match',
        },
        ej13: {
            title: "EJ 13: RegEx Quitar Etiquetas HTML",
            rule: "Quitar etiquetas HTML (e.g., <p>, <span>).",
            regex: /<[^>]+>/g,
            text: "Hola <b>Mundo</b>. Esto es un <span>ejemplo</span> de texto.",
            operation: 'replace',
        },
        ej14: {
            title: "EJ 14: RegEx Dividir en Oraciones",
            rule: "Dividir un texto en oraciones con . ? ! (y espacio opcional).",
            regex: /([.?!])\s*(?=[A-ZÁÉÍÓÚÜÑ])/g,
            text: "Hola. Cómo estás? Bien! Genial. Ahora sí.",
            operation: 'split',
        },
        ej15: {
            title: "EJ 15: RegEx Detectar Formato de Fecha",
            rule: "Detectar formato de fecha (dd/mm/yyyy).",
            regex: /\b\d{2}\/\d{2}\/\d{4}\b/g,
            tests: [
                { input: "25/12/2024", expected: true },
                { input: "5/12/2024", expected: false }, 
                { input: "25-12-2024", expected: false }, 
            ]
        }
    };
    function runRegexTest(ejKey) {
        const data = regexExamples[ejKey];
        let output = `${data.rule}\n\n`;
        if (data.operation === 'match') {
            const matches = data.text.match(data.regex);
            output += `Texto Original:\n${data.text}\n\n`;
            output += `Resultados encontrados:\n${matches ? matches.join('\n') : 'Ningún resultado'}`;
        } else if (data.operation === 'replace') {
            const result = data.text.replace(data.regex, '');
            output += `Texto Original:\n${data.text}\n`;
            output += `RegEx: ${data.regex}\n\n`;
            output += `Resultado (Reemplazo con ''):\n${result}\n`;
        } else if (data.operation === 'split') {
            const textWithMarkers = data.text.replace(data.regex, "$1|"); 
            const sentences = textWithMarkers.split('|').filter(s => s.trim() !== '');
            output += `Texto Original:\n"${data.text}"\n`;
            output += `RegEx: ${data.regex} (Lookahead)\n\n`;
            output += `Resultado (Split):\n`;
            sentences.forEach((s, i) => {
                output += `[${i + 1}]: "${s.trim()}"\n`;
            });
        } else {
            output += "Ejemplos de test:\n";
            data.tests.forEach(test => {
                const result = data.regex.test(test.input);
                if (data.regex.global) data.regex.lastIndex = 0;
                output += `-> "${test.input}"\n`;
                output += `   Resultado: ${result ? 'COINCIDE' : 'NO COINCIDE'}\n`;
                output += `   Esperado: ${test.expected ? 'COINCIDE' : 'NO COINCIDE'}\n`;
                output += `   ${result === test.expected ? '✅ OK' : '❌ ERROR'}\n`;
            });
        }
        displayAlert(data.title, output);
    }
    document.getElementById('ej11').addEventListener('click', () => runRegexTest('ej11'));
    document.getElementById('ej12').addEventListener('click', () => runRegexTest('ej12'));
    document.getElementById('ej13').addEventListener('click', () => runRegexTest('ej13'));
    document.getElementById('ej14').addEventListener('click', () => runRegexTest('ej14'));
    document.getElementById('ej15').addEventListener('click', () => runRegexTest('ej15'));
});