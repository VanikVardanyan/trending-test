import "./NavBar.scss"


    function NavBar({ isArchiveClicked }){
        return(
            <div className="NavBar">
                <button className="NavBar_Btns" onClick={(status) => isArchiveClicked(false)}>Trading</button>
                <button className="NavBar_Btns" onClick={(status) => isArchiveClicked(true)}>Archive</button>
            </div>
        )
    }

export default NavBar;