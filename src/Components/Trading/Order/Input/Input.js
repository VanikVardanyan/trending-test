import "./Input.scss"


    function Input({isError, onChange, type, placeholder, className}){
        return(
            <> 
                <input type={type} style={isError?{borderColor:"red"}:{borderColor:"gray"}} className={className} onChange={onChange} placeholder={placeholder}/>
            </>
        )
    }

export default Input