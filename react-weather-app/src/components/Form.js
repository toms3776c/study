import { useState } from "react";

const Form = () => {
    const [city, setCity] = useState("");
    return (
        <form>
            <input type="text" name="city" placeholder="都市名" onChange = {e => setCity(e.target.value)} />
            {city}
            <button type="submit">Get Wwather</button>
        </form>
    );
};

export default Form;