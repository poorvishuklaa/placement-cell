const bcrypt = require('bcrypt');

async function convertTextToHash(text) {
  try {
    const saltRounds = 10; // You can adjust the number of salt rounds
    const hashedText = await bcrypt.hash(text, saltRounds);
    console.log('Hashed Text:', hashedText);
    return hashedText;
  } catch (error) {
    console.error('Error hashing text:', error);
  }
}

// Example usage
const myText = "poorvi";
convertTextToHash(myText);