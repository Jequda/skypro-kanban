export function commonHandleInputChange({ objects }) {
    const [newValue, setNewValue] = useState({ objects });

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Извлекаем имя поля и его значение

        { setNewValue } ({
            ...{ newValue }, // Копируем текущие данные из состояния
            [name]: value, // Обновляем нужное поле
        });
    };
}