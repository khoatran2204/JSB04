function ktrnamnhuan(year)
{
    if ((year % 4 == 0 && year %100 != 0) || (year % 400 == 0)) return ("nam nhuan");
    return("nam ko nhuan"); 
}
console.log(ktrnamnhuan(2020))