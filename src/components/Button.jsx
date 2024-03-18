import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({ className, href, onClick, children, px, white, }) => {
  // The round bracket is asking the function to return the content as a whole.
  // Essentially skipping the statement return(...)
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"}`;

  const spanClasses = 'relative z-10';

  // If href link is passed as prop
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  )
  
  // If NOT:
  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )

  return href ? renderLink() : renderButton();
}

export default Button