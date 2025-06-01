const getTheTitles = function() {
    const data = [
        {
            book: "Book",
            author: "johse"
        },
        {
            book: "Book2",
            author: "honee"
        }
    ];
    const books = data.map(function(item) {
        return item.book;
    });

    return books;
};

console.log(getTheTitles());


// Do not edit below this line
module.exports = getTheTitles;
