const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user"

export async function getTodos({ token }) {
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    const data = await response.json();
    return data;
}


export async function postTodo({ token, title, description, topic, date, status }) {
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
            title,
            description,
            topic,
            date,
            status,
        }),
    });

    if (!response.ok) {
        throw new Error("Пожалуйста, заполните все поля");
    }

    const data = await response.json();
    return data;
}

export async function PutTodo({ id, token, title, description, topic, date, status }) {
    const response = await fetch(baseHost + `/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: JSON.stringify({
            title,
            description,
            topic,
            date,
            status,
        }),
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    const data = await response.json();
    return data;
}

export async function deleteTodo({ id, token }) {
    const response = await fetch(baseHost + `/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    const data = await response.json();
    return data;
}

export async function getUsersList({ token }) {
    const response = await fetch(userHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    const data = await response.json();
    return data;
}

export async function SignUp({ name, login, password }) {
    const response = await fetch(userHost, {
        method: "POST",
        body: JSON.stringify({
            name,
            login,
            password,
        }),
    });

    if (!response.ok) {
        throw new Error("Такой пользователь уже существует");
    }

    return response.json();
}

export async function SignIn({ login, password }) {
    const response = await fetch(userHost + "/login", {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    });

    if (!response.ok) {
        throw new Error("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
    }

    return response.json();
}