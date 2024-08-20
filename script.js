function generatePassword() {
    const name = document.getElementById('nameInput').value;
    const length = 12;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Combine the name and the random password
    const finalPassword = name + password;
    
    document.getElementById('passwordOutput').textContent = `Generated Password: ${finalPassword}`;
}
