import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = 'https://yvlbsqskzvmykkzdppeo.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_GYVKsvN1JOyAh_P32ZTtgw_bbYqCsi1'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*')

    for (let book of books) {
        let bookList = document.getElementById("books");
        bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.ISBN}</td></tr>`;
    }
}

fetchBooks();