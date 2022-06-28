/* 
Roman numerals are represented by seven 
different symbols: I, V, X, L, C, D and M.
There are six instances where subtraction is used:

I can be placed before V (5) and X (10) 
to make 4 and 9. 
X can be placed before L (50) and C (100)
 to make 40 and 90. 
C can be placed before D (500) and M (1000)
 to make 400 and 900.
*/

function inToRoman(num){
    let res = '';
    while(num > 0){
        if(num >= 1000){
            res = res + 'M';
            num = num - 1000;
        } else if (num >= 900){
            res = res + 'CM';
            num = num - 900;
        } else if (num >= 500){
            res = res + 'D';
            num = num - 500;
        } else if (num >= 400){
            res = res + 'CD';
            num = num - 400;
        } else if (num >= 100){
            res = res + 'C';
            num = num - 100;
        } else if (num >= 90){
            res = res + 'XC';
            num = num - 90;
        } else if (num >= 50){
            res = res + 'L';
            num = num - 50;
        } else if (num >= 40){
            res = res + 'XL';
            num = num - 40;
        } else if (num >= 10){
            res = res + 'X';
            num = num - 10;
        } else if (num >= 9){
            res = res + 'IX';
            num = num - 9;
        } else if (num >= 5){
            res = res + 'V';
            num = num - 5;
        } else if (num >= 4){
            res = res + 'IV';
            num  = num - 4;
        } else if (num >= 1){
            res = res + 'I';
            num = num - 1;
        }
    }
    return res;
}

