"use client";
import { useEffect, useState } from 'react';
import { getBooks } from '@/services/books';
import Card from '@/components/Card/Card';

export default function Home() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => { getBooks().then((res) => { setBooks(res) }) }, []);


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {

        books.map((book, idx) => (

          <Card key={idx} data={book} />

        //  
        ))

      }
    </div>
  );
}
