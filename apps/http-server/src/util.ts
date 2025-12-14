export function random(len: number) {
    let option = "sfsjnvsavjavnsavnasfa";
    let lenght = option.length;

    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += option[Math.floor(Math.random() * lenght)];
    }
    return ans;

}