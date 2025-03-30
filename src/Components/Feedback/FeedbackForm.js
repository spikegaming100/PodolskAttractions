const {useState} = require("react");

function FeedbackForm() {
    const [buttonText, setButtonText] = useState("Отправить");
    const [formData, setFormData] = useState({
        suggestion: "",
        name: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем обновление страницы

        // Простая валидация: оба поля должны быть заполнены
        if (formData.suggestion.trim() && formData.name.trim()) {
            setButtonText("Успешно");
        } else {
            setButtonText("Ошибка");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <div>
                    <input className="suggestion"
                           name="suggestion"
                           value={formData.suggestion}
                           onChange={handleChange}
                           placeholder="Ваше предложение"
                    />
                </div>
                <div>
                    <input className="name"
                           type="text"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="Ваше имя"
                    />
                </div>
                <button type="submit" className="submit">{buttonText}</button>
            </form>
        </div>
    );
}

export default FeedbackForm;