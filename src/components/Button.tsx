import ButtonSvg from "../assets/svg/ButtonSvg";

type buttonProps={className?:string, href?:string, onClick?:()=>void, children?:any, px?:string, white?:boolean}

const Button = ({className, href, onClick, children, px, white}:buttonProps) => {

    const classes=`button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px ||'px-7'} ${white?'text-n-8':'text-n-1'} ${className || ""}`;

    const spanClasses="relative z-10"

    const renderButton=()=>(
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
            {ButtonSvg(white)}
        </button>
    )

    const renderLink =()=>(
        <a href={href} className={classes}>
        <span className={spanClasses}>
            {children}  
        </span>

        {ButtonSvg(white)}
            </a>
    )
  

  return  href?renderLink():renderButton();
  
}

export default Button;