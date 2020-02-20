import React from 'react';

function Form(){
    return(
        <>
        <div id="container">
        <div className="newUser">Faça seu login para participar :)</div>
        <br/>
        <form className="formStyle">
            <label>Nome</label><input name="nome"></input><br/>
            <label>Email</label><input name="nome"></input><br/>
            <label>Senha</label><input name="nome"></input><br/>
            <label>Data de nascimento</label><input name="nome"></input><br/>
            <label>Sexo</label><input name="nome"></input><br/>
        </form>
        </div>
        </>
    );
}

export default Form