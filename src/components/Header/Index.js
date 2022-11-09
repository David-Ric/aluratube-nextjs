import config from '../../../config.json'

import styled from 'styled-components';

const StyleHeader = styled.div`
margin-top: 40px ;
    img{
        width: 80px;
        heigth: 80px;
        border-radius: 50%;
    }
    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
    `; 
    const StyledBanner = styled.div`
    background-color: red;
    background-image: url('https://img.freepik.com/vetores-gratis/diagrama-de-linhas-de-cuircuito-azul-brilhante_1017-33018.jpg?w=2000');
    height: 230px;
    `;

export default function Header(){
    return(
        <StyleHeader>
            <StyledBanner/>
           {/* <img src=''/>*/}
           <section className='user-info'>
                <img src={`https://github.com/${config.github}.png`}/>
                <div>
                    <h2>
                    {config.name}
                    </h2>    
                    <p>
                    {config.job}
                    </p>
                </div>
                
                
           </section>
        </StyleHeader>
    )
}