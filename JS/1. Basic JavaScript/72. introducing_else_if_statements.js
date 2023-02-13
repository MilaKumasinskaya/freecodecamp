function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

testElseIf(0);
testElseIf(5);
testElseIf(7);
testElseIf(10);
testElseIf(12);