function dayOfProgrammer(year) {

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return "12.09."+String(year);
    } else if (year < 1918 && year % 4 == 0) {
        return "12.09."+String(year);
    }
    else if (year == 1918) {
        return "26.09.1918";
    } 
    else {
        return "13.09."+String(year);
    }

}