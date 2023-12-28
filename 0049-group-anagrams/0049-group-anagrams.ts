function groupAnagrams(strs: string[]): string[][] {
    const anagrams = new Map();
    
    for (const word of strs){
        const key = word.split("").sort().join("");
        if (anagrams.get(key)){
            anagrams.get(key).push(word);
        }else{
            anagrams.set(key, [word])
        }
    }
    
    const anagramGroups = Array.from(anagrams.values());
    
    return anagramGroups;
};