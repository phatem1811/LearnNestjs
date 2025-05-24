const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hassPasswordHelper = async (plainPassword: string) => {
  try {
    return await bcrypt.hash(plainPassword, saltRounds)
  } catch (error) {
    console.log(error);
  }
};
