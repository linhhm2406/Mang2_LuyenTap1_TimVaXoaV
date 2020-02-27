let array = [];
let position = 0;
for (let i = 0; i < 10; i++) {
    array[i] = parseInt(prompt('Nhap vao gia tri phan tu ' + i));
}
let V = parseInt(prompt('Nhap vao so nguyen V'));

for (let i = 0; i < 10; i++) {
    if (array.indexOf(V) !== -1) {
        alert('V is in the array');
        array.splice(array.indexOf(V), 1);
        array.push(0);
        break;
    } else {
        alert('V is not in the array');
    }
}

alert('Mang sau khi da xoa V la ' + array);