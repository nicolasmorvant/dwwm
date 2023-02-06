function palindrome(tab)
{
    let i = 0;
    let j = tab.length-1;
    let mediane = tab.length/2;
    let palin = true;
    while(palin && i < mediane && j>mediane)
    {
        if(tab[i]!=tab[j])
        {
            palin = false;
        }
        i++;
        j--;
    }
    return palin
}


let tableau1 = [0,1,9,10];
console.log(palindrome(tableau1));

let tableau2 = [0,1,9,10,9,1,0];
console.log(palindrome(tableau2));

let tableau3 = [0,1,1,0];
console.log(palindrome(tableau3));

let tableau4 = [0,1,9,10,9,1];
console.log(palindrome(tableau4));

/* 
---------------------
CORRECTION DE THIERRY
---------------------



*/