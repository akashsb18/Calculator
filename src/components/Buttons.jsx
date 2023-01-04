import React from 'react'

const Buttons = () => {

    return (
        <div className="w-full h-screen dark:text-white flex items-center justify-center">
            <div className="w-full max-w-[400px] bg-white  rounded-2xl overflow-hidden shadow-md">
                <div className="p-4 text-right font-semibold text-3xl">
                    <span className="text-xl text-gray-500">(0)</span>
                    0
                </div>
                <div className="grid grid-cols-4 font-bold  p-10 ">
                    <button className="bg bg-[#ffd5d8] text-[#fc4552]">C</button>
                    <button class="operator">÷</button>
                    <button class="operator">×</button>
                    <button class="operator">←</button>
                    <button class="operand">7</button>
                    <button class="operand">8</button>
                    <button class="operand">9</button>
                    <button class="operator">-</button>
                    <button class="operand">4</button>
                    <button class="operand">5</button>
                    <button class="operand">6</button>
                    <button class="operator">+</button>
                    <button class="operand">1</button>
                    <button class="operand">2</button>
                    <button class="operand">3</button>
                    <button class="equal">=</button>
                    <button class="operator">(</button>
                    <button class="operand">0</button>
                    <button class="operator">)</button>

                </div>

            </div>

        </div>
    )
}

export default Buttons