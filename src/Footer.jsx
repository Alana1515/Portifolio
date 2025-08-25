


function Footer(){

    
const user = {
    name:"28 anos",
    imageSize: 10,
};

    return(
<>
<h1>{user.name}</h1>

<p/>
<img
className="iimm"src="public/Joao-28anos.avif"
alt={"photo of " + user.name}// photo of é uma string fixa que se refere à imagem do usuário

/>
</>
)

}
export default Footer