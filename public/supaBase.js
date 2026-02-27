import { createClient } from 'npm:@supabase/supabase-js@2'

const supabaseUrl = 'https://yvlbsqskzvmykkzdppeo.supabase.co'
const supabaseKey = 'sb_publishable_GYVKsvN1JOyAh_P32ZTtgw_bbYqCsi1'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
    let { data: books, error } = await supabase
        .from('books')
        .select('*')

    if (error) {
        console.error('Error fetching books:', error);
        document.getElementById('bookList').innerHTML = 
            '<li>Error loading data</li>';
        return;
    }

    if (!books || books.length === 0) {
        console.log('No books found');
        document.getElementById('bookList').innerHTML = 
            '<li>No books available</li>';
        return;
    }

    let bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    for (let book of books) {
        let listItem = `<li>${book.title || 'N/A'} by ${book.author || 'Unknown'}</li>`;
        bookList.innerHTML += listItem;
    }
}

getBooks();