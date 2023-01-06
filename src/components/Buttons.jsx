import React, { useState } from 'react'

const Buttons = () => {

    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '-', '+', '←', ')', '(', '.'];

    const updateCalc = value => {

        if (
            //If the first value is an operator or last value of the given input is also an operator
            (ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }
        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }

    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc === '') {
            return;
        }
        const value = calc.slice(0, -1);

        setCalc(value);
    }

    const clear = () => {
        if (calc === '') {
            return;
        }
        const value = calc.slice(calc.length);

        setCalc(value);
    }


    return (
        <div className="w-full h-screen dark:text-white flex items-center justify-center">
            <div className="w-full max-w-[400px] bg-white  rounded-2xl overflow-hidden shadow-md dark:bg-black">
                <div className="p-4 text-right font-semibold text-3xl h">
                    {calc || 0}
                </div>
                <div className="grid grid-cols-4 font-bold  p-10 ">
                    <button className="bg bg-[#ffd5d8] text-[#fc4552]" onClick={clear}>C</button>
                    <button class="operator" onClick={() => updateCalc('/')}>÷</button>
                    <button class="operator" onClick={() => updateCalc('*')}>x</button>
                    <button class="operator" onClick={deleteLast}>←</button>
                    <button class="operand" onClick={() => updateCalc('7')} >7</button>
                    <button class="operand" onClick={() => updateCalc('8')}>8</button>
                    <button class="operand" onClick={() => updateCalc('9')}>9</button>
                    <button class="operator" onClick={() => updateCalc('-')}>-</button>
                    <button class="operand" onClick={() => updateCalc('4')}>4</button>
                    <button class="operand" onClick={() => updateCalc('5')}>5</button>
                    <button class="operand" onClick={() => updateCalc('6')}>6</button>
                    <button class="operator" onClick={() => updateCalc('+')}>+</button>
                    <button class="operand" onClick={() => updateCalc('1')}>1</button>
                    <button class="operand" onClick={() => updateCalc('2')}>2</button>
                    <button class="operand" onClick={() => updateCalc('3')}>3</button>
                    <button class="equal" onClick={calculate}>=</button>
                    <button class="operator" onClick={() => updateCalc('(')}>(</button>
                    <button class="operand" onClick={() => updateCalc('0')}>0</button>
                    <button class="operator" onClick={() => updateCalc(')')}>)</button>
                    <button class="operator" onClick={() => updateCalc('.')}>.</button>

                </div>

            </div>

        </div>
    )
}

export default Buttons