function selectCalculation(type) {
    document.getElementById('inputForms').style.display = 'block';

    if (type === 'keliling') {
        document.getElementById('kelilingForm').style.display = 'block';
        document.getElementById('luasForm').style.display = 'none';
        document.getElementById('subtitle').innerHTML = '<h2>Keliling Segitiga</h2>';
    } else if (type === 'luas') {
        document.getElementById('kelilingForm').style.display = 'none';
        document.getElementById('luasForm').style.display = 'block';
        document.getElementById('subtitle').innerHTML = '<h2>Luas Segitiga</h2>';
    }
}

function calculate(type) {
    var sideA = parseFloat(document.getElementById('sideA').value);
    var sideB = parseFloat(document.getElementById('sideB').value);
    var sideC = parseFloat(document.getElementById('sideC').value);

    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (type === 'keliling' && !isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
        var perimeter = sideA + sideB + sideC;

        document.getElementById('result').innerHTML = `
            <p>Keliling Segitiga: ${perimeter.toFixed(2)}</p>
            <p>Rumus Keliling: Sisi A + Sisi B + Sisi C</p>
        `;
    } else if (type === 'luas' && !isNaN(base) && !isNaN(height)) {
        var area = 0.5 * base * height;

        document.getElementById('result').innerHTML = `
            <p>Luas Segitiga: ${area.toFixed(2)}</p>
            <p>Rumus Luas: 0.5 * Panjang Alas * Tinggi</p>
        `;
    } else {
        alert('Please enter valid numbers for the selected calculation.');
    }
}

function resetForm(type) {
    document.getElementById(type + 'Form').reset();
    document.getElementById('result').innerHTML = '';
}