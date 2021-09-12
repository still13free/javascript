var start = 0
var end = 100
var p_arr = []
var number = start
while (number <= end) {
    /* поскольку 0 и 1 в заданном промежутке не являются простыми, отсечём их
    а так как присутствует желание сделать в более общем виде, отсечём ещё и "возможные" отрицательные числа */
    if (number < 0) {
        number += Math.abs(number);
        continue;
    } else if (number == 0) {
        number += 2;
        continue;
    } else if (number == 1) {
        number++;
        continue;
    }

    var sqrt = Math.sqrt(number)
    var is_divided = false
    for (let p of p_arr) {
        if (p <= sqrt) {
            if (number % p == 0) {
                is_divided = true;
                break;
            }
        } else { break; }
    }
    if (!is_divided) {
        console.log(number);
        p_arr.push(number);
    }
    number++;
}