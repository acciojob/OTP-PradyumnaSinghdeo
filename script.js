//your JS code here. If required.
document.addEventListener('DOMContentLoaded', (event) => {
    const codes = document.querySelectorAll('.code');

    codes.forEach((code, idx) => {
        code.addEventListener('keydown', (e) => {
            if (e.key >= 0 && e.key <= 9) {
                codes[idx].value = ''; // Reset the current value
                setTimeout(() => codes[idx + 1]?.focus(), 10); // Move to next input
            } else if (e.key === 'Backspace') {
                setTimeout(() => codes[idx - 1]?.focus(), 10); // Move to previous input
            }
        });
    });
});