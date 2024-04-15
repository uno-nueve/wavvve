import { Plus, X } from "@phosphor-icons/react";

type ButtonProps = {
    handlerFunction: (value?: unknown) => void;
};

const AddButton = ({ handlerFunction: handlerFunction }: ButtonProps) => {
    return (
        <>
            <button onClick={handlerFunction}>
                <Plus
                    size={26}
                    weight="bold"
                    className="p-1 border-2 border-[#707070] text-[#707070] font-semibold rounded-md mr-2 hover:text-[#D9D9D9] hover:border-[#D9D9D9]"
                />
            </button>
        </>
    );
};

const ClearButton = ({ handlerFunction: handlerFunction }: ButtonProps) => {
    return (
        <>
            <button onClick={handlerFunction}>
                <X
                    size={26}
                    weight="bold"
                    className="p-1 border-2 border-[#D9D9D9] text-[#D9D9D9] rounded-md"
                />
            </button>
        </>
    );
};

export { AddButton, ClearButton };
