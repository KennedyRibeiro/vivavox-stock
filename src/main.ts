import db from "./db";

enum AccessLevel {
  User,
  Admin,
}

async function main() {
  // const newuser = await db.user.create({data: {
  //     email: 'teste@teste.com',
  //     name: 'kennedy',
  //     password: 'admin',
  //     access_level: AccessLevel.Admin
  // }})

  await db.user.update({
    where: {
      email: "teste@teste.com",

    },
    data: {
        name: 'vivavox'
    }
  });

  await db.user.delete({where:{
    email: 'teste@teste.com'
  }})


  const usuarios = await db.user.findMany();
  console.log(usuarios);
}

main();
