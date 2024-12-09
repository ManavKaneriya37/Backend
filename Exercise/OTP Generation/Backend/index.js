const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3000;
const otpStore = new Map();

if (!process.env.EMAIL || !process.env.PASSWORD) {
    console.error("Environment variables EMAIL and PASSWORD must be set!");
    process.exit(1);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(cookieParser());

app.post("/generate-otp", async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
        return res.status(400).send("Email is required");
    }

    const otp = otpGenerator.generate(4, {
        digits: true,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
    });

    otpStore.set(email, otp);
    setTimeout(() => otpStore.delete(email), 5 * 60 * 1000);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Your OTP code",
        text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("OTP sent successfully!");
    } catch (error) {
        console.error("Error in sending mail:", error);
        res.status(500).send("Failed to send OTP. Try again later.");
    }
});

app.post('/verify-otp', async (req, res) => {
    const { email, OTP } = req.body;

    if(!otpStore.get(email)) {
        return res.status(400).send('Something went wrong');
    }

    if(otpStore.get(email) == OTP) {
        otpStore.delete(email);
        let token = await jwt.sign(email, process.env.JWT_SECRET_KEY);
        res.cookie('token', token, {httpOnly: true, secure: false, sameSite: 'none'});
        res.status(200).send("OTP verified successfully!");
    }
    else {
        res.status(400).send("Invalid OTP or expired OTP");
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
