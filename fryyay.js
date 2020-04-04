function palinDrome(string) { 
    const str = string.split("");
    const str1 = [];
    for (i = 0; i < str.length; i++) {
    str1.unshift(str[i])
    }
    if (JSON.stringify(str1) === JSON.stringify(str)) {
        console.log("This is a palinDrome");
    } else {
        console.log("This is not a plainDrome");
    }
}
palinDrome("tattarrattat");
// should log => This is not a plainDrome
