const Node = require('./Node.js');

class CompleteMe {
  constructor() {
    this.root = null;
    this.wordCount = 0;
  }

  insert(word) {
    const node = new Node();

    if (this.root === null) {
      this.root = node;
    }

    const letters = [...word.toLowerCase()];

    let currentNode = this.root;

    letters.forEach(letter => {
      if (!currentNode.childNode[letter]) {
        currentNode.childNode[letter] = new Node(letter);
      }
      currentNode = currentNode.childNode[letter];
    });

    if (!currentNode.isFullWord) {
      currentNode.isFullWord = true;
      this.wordCount++;
    }
  }

  count() {
    return this.wordCount;
  }

  suggest(wordUpperCased) {
    const word = wordUpperCased.toLowerCase();
    const wordsArray = [...word];
    let currentNode = this.root;
    const suggestions = [];


    for (let i = 0; i < wordsArray.length; i++) {
      currentNode = currentNode.childNode[wordsArray[i]];
    }

    const searchTrie = (word, currentNode) => {
      const keys = Object.keys(currentNode.childNode);

      for (let j = 0; j < keys.length; j++) {
        const child = currentNode.childNode[keys[j]];
        const newString = word + child.letter;

        if (child.isFullWord) {
          suggestions.push({ value: newString, frequency:
          child.frequency, lastTouched: child.lastTouched});
        }
        searchTrie(newString, child)
      }
    }

    if (currentNode && currentNode.isFullWord) {
      suggestions.push({value: word, frequency: currentNode.frequency, lastTouched: currentNode.lastTouched});
    }
    if (currentNode) {
      searchTrie(word, currentNode);
    }
    suggestions.sort((a, b) => {
      return b.frequency - a.frequency || b.lastTouched - a.lastTouched;
    })
    return suggestions.map(obj => {
      return obj.value;
    });
  }

  select(word) {
    let wordsArray = [...word];
    let currentNode = this.root;

    for (let i = 0; i < wordsArray.length; i++) {
      currentNode = currentNode.childNode[wordsArray[i]];
    }
    currentNode.frequency++;
    currentNode.lastTouched = Date.now()
  }

  populate(CityList) {
    CityList.forEach(word => {
      this.insert(word);
    })
  }
}

module.exports = CompleteMe;
