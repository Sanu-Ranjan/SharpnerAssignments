const dbCred = {
  name: {
    value: process.env.DB,
    description: "Databse Name:DB",
  },
  user: {
    value: process.env.USER,
    description: "mysql User Account Name:USER",
  },
  password: {
    value: process.env.PASS,
    description: "mysql user Account Password:PASS",
  },
};

for (let credentials in dbCred) {
  if (!dbCred[credentials].value) {
    console.log(
      `FATAL ERROR:${dbCred[credentials].description} is not defined`
    );
    process.exit(1);
  }
}

module.exports.dbcred = dbCred;
