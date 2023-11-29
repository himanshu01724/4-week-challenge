function Header({heading}){
    return(
        <header style={{textAlign:'center',fontSize:'20px',wordSpacing:'25px',fontFamily:'arial',color:'#FFC72C',fontWeight:'20'}}>
        <h1>&#8212;{heading}&#8212;</h1>
        </header>
    )
}
export default Header;