"use client";

import { useState } from "react";

export default function Page() {
    // Data buku dengan progres membaca
    const books = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            cover: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
            progress: 40,
        },
        {
            id: 2,
            title: "Senja Di Jakarta",
            author: "Mochtar Lubis",
            cover: "https://down-id.img.susercontent.com/file/20c52ee3d6de607646749c875b7757b5",
            progress: 75,
        },
        {
            id: 3,
            title: "1984",
            author: "George Orwell",
            cover: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
            progress: 20,
        },
    ];

    // State untuk daftar buku yang disimpan
    const [savedBooks, setSavedBooks] = useState<number[]>([]);

    // Ganti fungsi addBook dengan toggleBook
    const toggleBook = (id: number) => {
        if (savedBooks.includes(id)) {
            // hapus buku dari daftar
            setSavedBooks(savedBooks.filter((bookId) => bookId !== id));
        } else {
            // tambahkan buku ke daftar
            setSavedBooks([...savedBooks, id]);
        }
    };

    // Component buku
    const BookItem = (props: { id: number; title: string; author: string; cover: string; progress: number }) => {
        const isSaved = savedBooks.includes(props.id);

        return (
            <div className="book-item">
                <img src={props.cover} alt={props.title} className="book-cover" />

                <div className="book-info">
                    <h3 className="book-title">{props.title}</h3>
                    <p className="book-author">{props.author}</p>

                    {/* Progress membaca */}
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${props.progress}%` }}></div>
                    </div>
                    <p className="progress-text">{props.progress}% dibaca</p>
                </div>

                <button
                    className={`btn-plus ${isSaved ? "saved" : ""}`}
                    aria-label="Toggle Book"
                    onClick={() => toggleBook(props.id)}
                >
                    {isSaved ? "✓" : "+"}
                </button>
            </div>
        );
    };

    return (
        <div className="container">
            <h2 className="title">Daftar Buku</h2>

            {books.map((b) => (
                <BookItem
                    key={b.id}
                    id={b.id}
                    title={b.title}
                    author={b.author}
                    cover={b.cover}
                    progress={b.progress}
                />
            ))}

            <style>{`
        .container {
          max-width: 500px;
          margin: auto;
          padding: 16px;
        }

        .title {
          text-align: center;
          font-size: 22px;
          margin-bottom: 20px;
        }

        .book-item {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          background: #fff;
          padding: 12px;
          border-radius: 10px;
          margin-bottom: 15px;
          box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
        }

        .book-cover {
          width: 60px;
          height: 90px;
          border-radius: 6px;
          object-fit: cover;
          margin-right: 12px;
        }

        .book-info {
          flex: 1;
        }

        .book-title {
          margin: 0;
          font-size: 16px;
          font-weight: bold;
          color: #000;
        }

        .book-author {
          color: #666;
          margin: 4px 0;
          font-size: 14px;
        }

        .progress-container {
          background: #eee;
          border-radius: 6px;
          height: 8px;
          width: 100%;
          margin: 6px 0;
        }

        .progress-bar {
          height: 100%;
          background: #1976d2;
          border-radius: 6px;
        }

        .progress-text {
          font-size: 12px;
          color: #333;
        }

        .btn-plus {
          background: #d32f2f;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 50%;
          font-size: 18px;
          cursor: pointer;
        }

        .btn-plus:hover:not(:disabled) {
          background: #b71c1c;
        }

        .btn-plus.saved {
          background: #4caf50;
        }

        .saved-section {
          margin-top: 20px;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: #f9f9f9;
        }

        /* Responsif hp */
        @media (max-width: 480px) {
          .book-item {
            padding: 10px;
          }

          .book-cover {
            width: 50px;
            height: 75px;
          }

          .book-title {
            font-size: 14px;
          }

          .book-author {
            font-size: 13px;
          }

          .progress-text {
            font-size: 11px;
          }

          .btn-plus {
            padding: 6px 10px;
            font-size: 16px;
          }
        }
      `}</style>
        </div>
    );
}