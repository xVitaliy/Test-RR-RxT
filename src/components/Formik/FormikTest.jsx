import React, { useState } from 'react';
import FormTest1 from "./FormTest_1";
import FormTest2 from "./FormTest_2";

const FormikTest = () => {
    const [form, setForm] = useState(false)

    const styles = {
        display: form ? 'block' : 'none'
    }

    return (
        <div>
            <h3>переключить форму</h3>
            <button onClick={() => setForm(prevState => !prevState)}>press</button>

            <div style={{ display: form && 'none' }}>
                <FormTest1 />
            </div>
            <div style={{ display: !form && 'none' }}>
                <FormTest2 />
            </div>
        </div>
    );
};

export default FormikTest;

