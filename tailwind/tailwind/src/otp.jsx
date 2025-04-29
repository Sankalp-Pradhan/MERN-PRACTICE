import { useRef, useState } from "react";

export function Otp() {
    //     const ref1 = useRef();
    //     const ref2 = useRef();
    //     const ref3 = useRef();
    //     const ref4 = useRef();
    //     const ref5 = useRef();
    //     const ref6 = useRef();

    //     const [disabled  , setDisabled ] = useState(true);

    //     return <div className=" flex justify-center">
    //         <SubOtpBox refernce={ref1} onDone={()=>{
    //             ref2.current.focus();
    //         }} />
    //         <SubOtpBox refernce={ref2} onDone={()=>{
    //             ref3.current.focus();
    //         }} />
    //         <SubOtpBox refernce={ref3} onDone={()=>{
    //             ref4.current.focus();
    //         }} />
    //         <SubOtpBox refernce={ref4} onDone={()=>{
    //             ref5.current.focus();
    //         }} />
    //         <SubOtpBox refernce={ref5} onDone={()=>{
    //             ref6.current.focus();
    //         }} />
    //         <SubOtpBox refernce={ref6} onDone={()=>{
    //             setDisabled(false)
    //         }} />
    //     </div>

    const inputRefs = Array.from({ length: 6 }, () => useRef());
    const [disabled, setDisabled] = useState(true);

    const handleDone = (index) => {
        if (index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        } else {
            setDisabled(false);
        }
    };
    const handleBack = (index) => {
        if (index > 0 && inputRefs[index - 1].current) {
            inputRefs[index - 1].current.focus();
        }
    };
    return (
        <div className="flex justify-center">
            {inputRefs.map((ref, index) => (
                <SubOtpBox
                    key={index}
                    reference={ref}
                    onDone={() => handleDone(index)}
                    onBack={() => handleBack(index)}
                />
            ))}
        </div>
    );
}


function SubOtpBox({ reference, onDone, onBack }) {
    const [inputBoxVal, setInputBoxVal] = useState("");

    const handleChange = (e) => {
        const val = e.target.value;

        if (val === "") {
            // Backspace or delete pressed
            setInputBoxVal("");
            if (onBack) onBack(); // Optional callback to go back
            return;
        }

        if (/^[0-9]$/.test(val)) {
            setInputBoxVal(val);
            onDone(); // Move to next input
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputBoxVal}
                ref={reference}
                onChange={handleChange}
                maxLength={1}
                className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none px-4 text-white text-center"
            />
        </div>
    );
}
