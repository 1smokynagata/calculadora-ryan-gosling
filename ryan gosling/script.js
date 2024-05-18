function calculate() { 
    window.alert('Abaixe o som :D')
    const expression = document.getElementById('expression').value;
    let result;
    
    try {
        result = eval(expression);
        showResultImage(result);
    } catch (e) {
        alert('Erro na expressão: ' + e.message);
    }
}

function showResultImage(result) {
    const resultImage = document.getElementById('resultImage');
    const resultSound = document.getElementById('resultSound');
    
    {
        resultImage.src = 'images/default_image.png';
        resultSound.src = 'audio/default_sound.mp3';
    }
    
    // ryan gosling.
    resultImage.style.display = 'block';
    
    resultSound.volume = 0.1;
    resultSound.play();
}
