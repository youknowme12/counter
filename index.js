
function increment()
{
    var num = Number(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML = num+1;
}

function decrement()
{
    var num = Number(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML = num-1;
}

function neutral()
{
    document.getElementById('number').innerHTML = 0;
}