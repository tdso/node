function retornarUser(callback) {
  setTimeout(function() {
    console.log("user");
    var usuario = { id: 123, nome: "Talisca" };
    callback(null, usuario);
  }, 3000);
}

function retornarTel(usuario, callback) {
  console.log("function tel");
  setTimeout(() => {
    usuario.tel.push({ tel: "9999-8555" });
    callback(null, usuario);
  }, 2000);
}

function retornarVeic(usuario, callback) {
  setTimeout(function() {
    console.log("veiculo sempre depois de tel");
    usuario.veiculo = { userId: usuario.id, descricao: "Fuscão Turbo" };
    callback(null, usuario);
  }, 2000);
}

retornarUser((erro, user) => {
  if (erro) {
    console.log("erro na chamada da api user");
  } else {
    user.tel = [];
    retornarTel(user, function(erro, user) {
      if (erro) {
        console.log("erro na chamada da api tel");
      } else {
        retornarVeic(user, function(erro, user) {
          if (erro) {
            console.log("erro na chamada da api veiculo");
          } else {
            console.log("resultados");
            console.log(user);
          }
        });
      }
    });
  }
});
