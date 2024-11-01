const correctPassword = "bruh"; // Change this to your desired password
const maxAttempts = 5;
let attemptCount = 0;
let lockoutTime = 30000; // 30 seconds lockout time
let isLocked = false;

document.getElementById("loginButton").addEventListener("click", () => {
    if (isLocked) {
        document.getElementById("message").textContent = "Too many attempts! Please wait.";
        return;
    }

    const passwordInput = document.getElementById("password").value;
    if (passwordInput === correctPassword) {
        document.getElementById("loginContainer").style.display = "none";
        document.getElementById("protectedContent").style.display = "block";
    } else {
        attemptCount++;
        document.getElementById("message").textContent = "Incorrect password. Try again.";
        
        if (attemptCount >= 5 maxAttempts) {
            isLocked = true;
            document.getElementById("message").textContent = "Too many attempts! Please wait.";
            setTimeout(() => {
                isLocked = false;
                attemptCount = 0;
                document.getElementById("message").textContent = "";
            }, lockoutTime);
        }
    }
});
