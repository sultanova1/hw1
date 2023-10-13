var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li','h1', 'p','h1','ol','br'];
var tagsCount = []
for(var i = 0;i < tags.length;i++){

    tagsCount[tags[i]]=(tagsCount[tags[i]]||0)+1
}

console.log(tagsCount)