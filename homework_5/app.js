var books=[
    {name:'Утонченный мертвец'},
    {name:'Убик Филип Дик'},
    {name:'Щарлота Бруне '},
    {name:'Уничтожить королевство'},
    {name:'Господин из Сан-Франциско'},
    {name:'Учитель'},
    {name:'Мертвые души'},
    {name:'Армия'},
    {name:'Ужин'},
    {name:'Палогическая Физиология'},
    {name:'Хирургия'},
]
function filterBooks(books) {
    var filteredBooks = books.filter(i =>
        i.name.toLowerCase().includes("у"))
    var restBooks = books.filter(i => !i.name.toLowerCase().includes("y"))
    filteredBooks = filteredBooks.map(i => i + " книги с буквой \"у\"")
    var allBooks = filteredBooks.concat(restBooks)
    for (let i = 0; i < allBooks.length; i++) {
        console.log(allBooks[i])
    }
}
filterBooks(books)





