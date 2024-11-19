import { GradientBorderExtraLargeButton, GradientBorderLargeButton, GradientBorderMediumButton, GradientBorderSmallButton } from "./BorderGradient";
import Icons from "./Icons";

interface Button {
    children: React.ReactNode;
    type: "button" | "submit";
    icon?: string;
    mainButton?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean;
    className?: string;
    loading?: boolean;
    smallSize?: boolean;
    mediumSize?: boolean;
    largeButton?: boolean;
}

const Button: React.FC<Button> = ({ children, type, icon, mainButton = false, onClick = undefined, disabled = false, className, loading, smallSize = false, mediumSize = false, largeButton = false }) => {
    return (
        <button
            className={`${disabled ? "opacity-50 bg-gradient-to-r from-purple to-pink" : "opacity-100"} text-center inline-block text-white rounded-full py-1 lg:rounded-lg ${className} ${(mainButton) ? "" : ""} group duration-100 select-none relative flex items-center`}
            onClick={onClick}
            type={type}
            disabled={disabled}>
            <span className={`${(mainButton) ? "bg-gradient-to-r from-purple to-pink" : "duration-150"} flex items-center gap-x-3 justify-center w-full rounded-full lg:rounded-lg py-3 px-5 lg:py-2`}>
                {(smallSize) ?
                    <GradientBorderSmallButton className={"absolute top-0 left-0 w-full h-full"} />
                    :
                    (mediumSize) ?
                        <GradientBorderMediumButton className={"absolute top-0 left-0 w-full h-full"} />
                        :
                        (largeButton) ?
                            <GradientBorderLargeButton className={"absolute top-0 left-0 w-full h-full"} />
                            :
                            <GradientBorderExtraLargeButton className={"absolute top-0 left-0 w-full h-full"} />
                }
                {(icon) ? <div className="w-7 inline-block"><Icons name={icon} /></div> : null}
                {loading ? <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div> : children}
            </span>
        </button>
    );
};

export default Button;