    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');

    checkBtn.addEventListener('click', checkPalindrome);

    function checkPalindrome() {
        const text = textInput.value.trim();
        
        if (text === '') {
            alert('Please input a value');
            return;
        }

        const isPalindrome = checkIfPalindrome(text);
        displayResult(text, isPalindrome);
    }

    function checkIfPalindrome(str) {
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    function displayResult(text, isPalindrome) {
        const resultText = isPalindrome ? `${text} is a palindrome` : `${text} is not a palindrome`;
        result.textContent = resultText;
        result.className = isPalindrome ? 'palindrome' : 'not-palindrome';
    }