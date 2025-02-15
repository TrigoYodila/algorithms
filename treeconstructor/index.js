function treeConstructor(strArr) {
    let parents = {};  // Stocke le nombre d'enfants par parent
    let children = {}; // Stocke le parent de chaque enfant

    for (let pair of strArr) {
        let [child, parent] = pair.match(/\d+/g).map(Number);

        // Un enfant ne peut avoir qu'un seul parent
        if (children[child]) return false;
        children[child] = parent;

        // Un parent ne peut avoir plus de 2 enfants
        parents[parent] = (parents[parent] || 0) + 1;
        if (parents[parent] > 2) return false;
    }

    // Un seul nœud doit être la racine (pas d'autre parent)
    let rootCount = 0;
    for (let node in children) {
        if (!children[children[node]]) rootCount++;
    }

    return rootCount === 1;
}

// 🔥 Tests
console.log(treeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"])); // true ✅
console.log(treeConstructor(["(1,2)", "(3,2)", "(2,4)", "(5,4)", "(6,4)"])); // false ❌ (4 a 3 enfants)
console.log(treeConstructor(["(1,2)", "(2,3)", "(3,4)", "(4,5)", "(5,6)"])); // false ❌ (chaîne, pas un arbre)
