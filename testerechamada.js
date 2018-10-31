function retornarVeic(usuario) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log("veiculo sempre depois de tel");
      usuario.veiculo = { userId: usuario.id, descricao: "Fuscão Turbo" };
      return resolve(usuario);
    }, 2000);
  });
}

function retornarUser() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log("user");
      var usuario = { id: 123, nome: "Talisca" };
      return resolve(usuario);
    }, 3000);
  });
}

function retornarTel(usuario, ind) {
  console.log("function tel");
  console.log(usuario);
  console.log(ind);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("tel > dentro timeout");
      if (ind < 3) {
        usuario.tel.push({ tel: "9999-8555" });
        ind += 1;
        return retornarTel(usuario, ind).then(function(usuario) {
          resolve(usuario);
        });
      }
      resolve(usuario);
    }, 2000);
  });
}

retornarUser()
  .then(function(dado) {
    dado.tel = [];
    return retornarTel(dado, 0);
  })
  .then(retornarVeic)
  .then(function(res) {
    console.log("resultados");
    console.log(res);
  });
console.log("execucao sequencial fim");
