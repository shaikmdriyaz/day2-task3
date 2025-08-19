import jwt from "jsonwebtoken"
const secretKey = "12345";

function encryptData() {
    const data = { name: "riyaz", agae: 21};
    const token = jwt.sign(data, secretKey, {expiresIn: "15m"});
    console.log("Encrypted Token:", token);
}
encryptData()