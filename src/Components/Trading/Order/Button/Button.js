import "./Button.scss"


    function Button({ styles, className, onClick, text, bgCOLOR }){
        return(
            <>
                <button 
                    style={{background: bgCOLOR || '' }}
                    onClick={onClick} 
                    className={className}>{text}</button>
            </>
        )
    }

export default Button