import jwt from "jsonwebtoken"
function decryptData()
{
        let secretKey = "12345";
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicml5YXoiLCJhZ2FlIjoyMSwiaWF0IjoxNzU1NTg3OTE3LCJleHAiOjE3NTU1ODg4MTd9.of6FWkuVAVXNZFcRAV0XkpilAfvudYbVUo3X9wVsAGM"
    const decoded = jwt.verify(token, secretKey);
    console.log("Decrypted Data:", decoded);
}
decryptData();