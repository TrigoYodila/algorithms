function minWindow(s, t) {
    if (t.length > s.length) return "";

    let freqT = {};
    for (let char of t) {
        freqT[char] = (freqT[char] || 0) + 1;
    }

    let left = 0, right = 0, count = 0;
    let minLength = Infinity, minWindow = "";
    let freqS = {};

    while (right < s.length) {
        let char = s[right];
        freqS[char] = (freqS[char] || 0) + 1;

        if (freqT[char] && freqS[char] <= freqT[char]) {
            count++;
        }

        while (count === t.length) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindow = s.substring(left, right + 1);
            }

            let leftChar = s[left];
            freqS[leftChar]--;

            if (freqT[leftChar] && freqS[leftChar] < freqT[leftChar]) {
                count--;
            }
            left++;
        }
        right++;
    }
    
    return minWindow;
}